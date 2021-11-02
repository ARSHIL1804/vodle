import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, ValidationErrors, AbstractControl } from '@angular/forms';
import { PopoverController, IonSelect, IonToggle } from '@ionic/angular';

import { DraftpollKebapPage } from '../draftpoll-kebap/draftpoll-kebap.module';  
import { AlertController } from '@ionic/angular'; 

import { GlobalService } from "../global.service";
import { Poll, Option } from "../poll.service";

import { SelectServerComponent } from '../sharedcomponents/select-server/select-server.component';

export function is_in_future(control: AbstractControl): ValidationErrors | null {
  if (control && control.value) {
    let currentDateTime = new Date();
    let controlValue = new Date(control.value);
    if (currentDateTime >= controlValue)
    {
        return {past: true};
    }
    return null;
  }
}

@Component({
  selector: 'app-draftpoll',
  templateUrl: './draftpoll.page.html',
  styleUrls: ['./draftpoll.page.scss'],
})
export class DraftpollPage implements OnInit {

  max = Math.max;

  p: Poll;
  options: Array<Option>;
  formGroup: FormGroup;
  stage: number
  option_stage: number;
  expanded: Array<boolean>;
  advanced_expanded: boolean;
  n_options: number;

  @ViewChild(IonSelect) type_select: IonSelect;
  @ViewChild(SelectServerComponent) select_server: SelectServerComponent;
  @ViewChild(IonToggle) detailstoggle: IonToggle;
  @ViewChildren(IonSelect) ionSelects: QueryList<IonSelect>;

  constructor(
    public formBuilder: FormBuilder, 
    private popover: PopoverController,
    public alertCtrl: AlertController,
    public G: GlobalService,
  ) { }
  
  ngOnInit() {
    this.G.D.setpage(this);
    let p = this.G.openpoll; 
    if (!p) {
      p = this.p = this.G.openpoll = new Poll(this.G);
      this.G.polls[p.pid] = p;
    } else {
      p = this.p = this.G.openpoll;
    }
    console.log(p);
    this.formGroup = this.formBuilder.group({
      poll_type: new FormControl(p.type, Validators.required),
      poll_title: new FormControl(p.title, Validators.required),
      poll_desc: new FormControl(p.desc),
      poll_url: new FormControl(p.uri, Validators.pattern(this.G.urlRegex)),
      poll_due_type: new FormControl(p.due_type, Validators.required),
      poll_due: new FormControl(p.due, is_in_future),
    });
    this.expanded = Array<boolean>(this.n_options);
    this.advanced_expanded = false;
    this.n_options = p.oids.length;
    this.options = [];
    this.stage = p.type?1:0;
    for (let oid of p.oids) {
      let o = p.options[oid];
      this.add_controls(o);
      this.stage = 5;
      this.option_stage = 10;
    }
    if (this.n_options==0) {
      this.add_option();
      this.option_stage = 0;
    }
  }

  data_changed() {
    // called whenever data stored in database has changed
    console.log("data changed while on settings page");
    // TODO!
  }

//  @HostListener('window:beforeunload', ['$event'])
  onBeforeUnload(event: Event) {
    // this seems to be called properly. TODO: perform cleanup! maybe move this to central app place?
    this.ionViewWillLeave();
//    return false;
  }
  ionViewWillLeave() {
    // this seems to be called properly. TODO: perform cleanup! maybe move this to central app place?
  }
  
  now() { return new Date(); }

  ionViewDidEnter() {
    this.select_server.setParent(this);
    this.ionSelects.map((select) => select.value = select.value);
    if (!this.formGroup.get('poll_type').value) this.type_select.open();
  }
  
  test_url(url: string) {
    if (!url.startsWith("http")) url = "http://" + url; // TODO: improve this logic
    window.open(url,'_blank');
  }

  blur_option_name(i: number, d: boolean) {
    if (d) {
      this.option_stage = this.max(this.option_stage, this.formGroup.get('option_name'+i).valid?1:0);
      this.expanded[i] = true;
    } else if (this.formGroup.get('option_name'+i).valid && i==this.n_options-1) {
      this.next_option(i)
    }
  }
  blur_option_url(i: number) {
    if (this.formGroup.get('option_url'+i).valid && i==this.n_options-1) {
      this.next_option(i)
    }
  }
  next_option(i: number) {
    this.option_stage = this.max(this.option_stage, 3);
    this.expanded[i] = false
    this.add_option();
  }

  del_option(i: number) {
    if (confirm("Delete " + (this.formGroup.get('poll_type').value=='choice' ? 'option' : 'target') 
          + " ‘" + this.formGroup.get('option_name'+i).value + "’")) {
      this.p.remove_option(this.options[i].oid);
      // move metadata of options i+1,i+2,... back one slot to i,i+1,..., then decrease n_options:
      for (let j=i+1; j<this.n_options; j++) {
        this.options[j-1] = this.options[j];
        this.formGroup.get('option_name'+(j-1)).setValue(this.formGroup.get('option_name'+j).value); 
        this.formGroup.get('option_desc'+(j-1)).setValue(this.formGroup.get('option_desc'+j).value); 
        this.formGroup.get('option_url'+(j-1)).setValue(this.formGroup.get('option_url'+j).value); 
      }
      this.n_options--;
      this.remove_last_controls();
    }
  }

  no_more() {
    if (this.formGroup.get('option_name'+(this.n_options-1)).value=='') {
      this.option_stage = 10;
      this.n_options--;
      this.remove_last_controls();
    }
  }

  remove_last_controls() {
    this.options = this.options.slice(0, this.n_options);
    this.formGroup.removeControl('option_name'+this.n_options);
    this.formGroup.removeControl('option_desc'+this.n_options);
    this.formGroup.removeControl('option_url'+this.n_options);
  }

  add_option(oid:string=null, name:string="", desc:string="", url:string="") {
    let o = new Option(this.G, this.p, oid);
    this.p._add_option(o);
    this.add_controls(o);
  }

  add_controls(o: Option) {
    let i = this.n_options;
    this.options.push(o);
    this.formGroup.addControl('option_name'+i, new FormControl(o.name, Validators.required));
    this.formGroup.addControl('option_desc'+i, new FormControl(o.desc));
    this.formGroup.addControl('option_url'+i, new FormControl(o.url, Validators.pattern(this.G.urlRegex)));
    this.option_stage = 0;
    this.n_options++;
  }

  validation_messages = {
    'poll_type': [
      { type: 'required', message: 'validation.poll-type-required' },
    ],
    'poll_title': [
      { type: 'required', message: 'validation.poll-title-required' },
    ],
    'poll_url': [
      { type: 'pattern', message: 'validation.poll-url-valid' },
    ],
    'poll_due_type': [
      { type: 'required', message: 'validation.poll-due-type-required' },
    ],
    'poll_due': [
      { message: 'validation.poll-due-future' },
    ],
    'option_name': [
      { type: 'required', message: 'validation.option-name-required' },
    ],
    'option_url': [
      { type: 'pattern', message: 'validation.option-url-valid' },
    ],
  }

  showkebap(event: Event)
  {
    this.popover.create({
        event, 
        component: DraftpollKebapPage, 
        translucent: true,
        showBackdrop: false,
        cssClass: 'kebap',
        componentProps: {parent: this}
      })
      .then((popoverElement)=>{
        popoverElement.present();
      })
  }

  send4review() { 
    console.log("2"); 
  }

  async import_csv_dialog() { 
    const confirm = await this.alertCtrl.create({ 
      header: 'Import options from file', 
      message: 'The file must be a .csv file.<br/><br/>Each row must specify one option, either in the format<br/>&nbsp;&nbsp;&nbsp;"Name"<br/>or<br/>&nbsp;&nbsp;&nbsp;"Name", "Description"<br/>or<br/>&nbsp;&nbsp;&nbsp;"Name", "Description", "URL"', 
      buttons: [
        { 
          text: 'Cancel', 
          role: 'Cancel',
          handler: () => { 
            console.log('Confirm Cancel.');  
          } 
        },
        { 
          text: 'Choose file',
          role: 'Ok', 
          handler: () => {
            document.getElementById("choosefile").click();
          } 
        } 
      ] 
    }); 
    await confirm.present(); 
  } 

  import_csv(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    const page = this;
    reader.onload = function (event) {
      const content = event.target.result as string;
      for (var row of content.split("\n")) {
        var cols = row.split(/\s*"\s*,\s*"\s*/);
        if (cols.length>0) {
          cols[0] = cols[0].slice(cols[0].indexOf('"')+1);
          cols[cols.length-1] = cols[cols.length-1].slice(0, cols[cols.length-1].indexOf('"'));
          cols = cols.map(c => c.trim());
          if (cols[0] != "") {
            page.no_more();
            if (cols.length==1) { 
              page.add_option(null, cols[0]);
            } else if (cols.length==2) { 
              page.add_option(null, cols[0], cols[1]);
              page.detailstoggle.checked = true;
            } else { 
              page.add_option(null, cols[0], cols[1], cols[2]); 
              page.detailstoggle.checked = true;
            }
            page.stage = 10;
            page.option_stage = 10;
          }
        }
      }
    }
    reader.readAsText(file);
  }

  // data change handlers:

  set_poll_type() {
    let c = this.formGroup.get('poll_type');
    if (c.valid) this.p.type = c.value;
  }
  set_poll_title() {
    let c = this.formGroup.get('poll_title');
    if (c.valid) this.p.title = c.value;
  }
  set_poll_desc() {
    let c = this.formGroup.get('poll_desc');
    if (c.valid) this.p.desc = c.value;
  }
  set_poll_url() {
    let c = this.formGroup.get('poll_url');
    if (c.valid) this.p.url = c.value;
  }
  set_poll_due_type() {
    let c = this.formGroup.get('poll_due_type');
    if (c.valid) this.p.due_type = c.value;
  }
  set_poll_due() {
    let c = this.formGroup.get('poll_due');
    if (c.valid) this.p.due = new Date(c.value);
  }
  set_option_name(i: number) {
    let c = this.formGroup.get('option_name'+i);
    if (c.valid) this.options[i].name = c.value;
  }

  // these will be called by selectServer component:
  set_db(value: string) {
    this.p.db = value;
  }
  set_db_from_pid(value: string) {
    this.p.db_from_pid = value;
  }
  set_db_url(value: string) {
    this.p.db_url = value;
  }
  set_db_username(value: string) {
    this.p.db_username = value;
  }
  set_db_password(value: string) {
    this.p.db_password = value;
  }

}
/*
  set_theme() {
    let c = this.formGroup.get('theme');
    if (c.valid) this.G.S.theme = c.value;
  }

*/