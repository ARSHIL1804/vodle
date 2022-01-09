import { Injectable } from '@angular/core';

import * as CryptoJS from 'crypto-js';

import { environment } from '../environments/environment';
import { GlobalService } from './global.service';

/* TODO:
- add state, allow only certain state transitions, allow attribute change only in draft state
*/

// TYPES:

type poll_state_t = ""|"draft"|"running"|"closed";
type poll_type_t = "winner"|"share";
type poll_due_type_p = "custom"|"10min"|"hour"|"midnight"|"24hr"|"tomorrow-noon"|"tomorrow-night"
                        |"friday-noon"|"sunday-night"|"week"|"two-weeks"|"four-weeks";

// in the following, month index start at zero (!) while date index starts at one (!):
var last_day_of_month = {0:31, 1:28, 2:31, 3:30, 4:31, 5:30, 6:31, 7:31, 8:30, 9:31, 10:30, 11:31};

// SERVICE:

@Injectable({
  providedIn: 'root'
})
export class PollService {

  private G: GlobalService;

  polls: Record<string, Poll> = {};
  // for each pid, oid and vid, the rating (default: 0):
  ratings_map: Map<string, Map<string, Map<string, number>>>;

  ref_date: Date;

  public get running_polls() {
    let res: Record<string, Poll> = {};
    for (let pid in this.polls) {
      let p = this.polls[pid];
      if (p.state=='running') {
        res[p.pid] = p;
      }
    }
    return res;
  }

  public get closed_polls() {
    let res: Record<string, Poll> = {};
    for (let pid in this.polls) {
      let p = this.polls[pid];
      if (p.state=='closed') {
        res[p.pid] = p;
      }
    }
    return res;
  }

  public get draft_polls() {
    let res: Record<string, Poll> = {};
    for (let pid in this.polls) {
      let p = this.polls[pid];
      if (p.state=='draft') {
        res[p.pid] = p;
      }
    }
    return res;
  }

  // TODO: store these two in D!
  private unused_pids: string[] = [];
  private unused_oids: string[][] = [];

  constructor() { }
  
  init(G:GlobalService) { 
    // called by GlobalService
    G.L.entry("PollService.init");
    this.G = G; 
    this.ratings_map = new Map();
  }

  generate_pid(): string {
    return this.unused_pids.pop() || CryptoJS.lib.WordArray.random(6).toString();
  }
  generate_oid(pid:string): string {
    if (!(pid in this.unused_oids)) this.unused_oids[pid] = [];
    return this.unused_oids[pid].pop() || CryptoJS.lib.WordArray.random(4).toString();
  }
  generate_password(): string {
    return CryptoJS.lib.WordArray.random(6).toString();
  }
  generate_vid(): string {
    return CryptoJS.lib.WordArray.random(4).toString();
  }

  update_ref_date() {
    this.ref_date = new Date();
  }

  update_rating(pid:string, vid:string, oid:string, r:number) {
    let rp = this.G.P.ratings_map.get(pid);
    if (!rp) {
      rp = new Map();
      this.G.P.ratings_map.set(pid, rp); 
    }
    let rpo = rp.get(oid);
    if (!rpo) {
      rpo = new Map();
      rp.set(oid, rpo); 
    }
    if (r != rpo.get(vid)) {
      if (pid in this.polls) {
        // let the poll object do the update:
        this.polls[pid].update_rating(vid, oid, r);
      } else {
        // just store the new value:
        rpo.set(vid, r);
      }
    }
  }

}


// ENTITY CLASSES:

export class Poll {

  private G: GlobalService;
  public _state: string;  // cache for state since it is asked very often

  constructor (G:GlobalService, pid?:string) { 
    this.G = G;
    if (!pid) {
      // generate a new draft poll
      pid = this.G.P.generate_pid();
      this.state = 'draft';
      this.G.D.setp(pid, 'pid', pid);
    } else {
      // copy state from db into cache:
      this._state = this.G.D.getp(pid, 'state') as poll_state_t;
    }
    G.L.entry("Poll.constructor", pid, this._state);
    this._pid = pid;
    this.G.P.polls[pid] = this;
    this.tally_all();      
    G.L.exit("Poll constructor", pid);
  }

  delete() {
    this.G.L.entry("Poll.delete", this._pid);
    delete this.G.P.polls[this._pid];
    this.G.D.delp(this._pid, 'type');
    this.G.D.delp(this._pid, 'title');
    this.G.D.delp(this._pid, 'desc');
    this.G.D.delp(this._pid, 'url');
    this.G.D.delp(this._pid, 'language');
    this.G.D.delp(this._pid, 'db');
    this.G.D.delp(this._pid, 'db_from_pid');
    this.G.D.delp(this._pid, 'db_other_server_url');
    this.G.D.delp(this._pid, 'db_other_password');
    this.G.D.delp(this._pid, 'db_server_url');
    this.G.D.delp(this._pid, 'db_password');
    for (let oid of Object.keys(this._options)) {
      this._options[oid].delete();
    }
    this.G.D.delp(this._pid, 'password');
    this.G.D.delp(this._pid, 'vid');
    this.G.D.delp(this._pid, 'state');
    this.G.L.exit("Poll.delete", this._pid);
  }

  private _pid: string;
  public get pid(): string { return this._pid; }
  // pid is read-only, set at construction

  // attributes that are needed to access the poll's database 
  // and thus stored in user's personal data.
  // they may only be changed in state 'draft':

  public get db(): string { return this.G.D.getp(this._pid, 'db'); }
  public set db(value: string) { 
    if (this.state=='draft') this.G.D.setp(this._pid, 'db', value); 
  }

  public get db_from_pid(): string { return this.G.D.getp(this._pid, 'db_from_pid'); }
  public set db_from_pid(value: string) { 
    if (this.state=='draft') this.G.D.setp(this._pid, 'db_from_pid', value); 
  }

  public get db_other_server_url(): string { return this.G.D.getp(this._pid, 'db_other_server_url'); }
  public set db_other_server_url(value: string) { 
    if (this.state=='draft') this.G.D.setp(this._pid, 'db_other_server_url', value); 
  }

  public get db_other_password(): string { return this.G.D.getp(this._pid, 'db_other_password'); }
  public set db_other_password(value: string) { 
    if (this.state=='draft') this.G.D.setp(this._pid, 'db_other_password', value); 
  }

  // the following will be set only once at publish or join time:

  public get db_server_url(): string { return this.G.D.getp(this._pid, 'db_server_url')}
  public set db_server_url(value: string) {
    this.G.D.setp(this._pid, 'db_server_url', value); 
  }

  public get db_password(): string { return this.G.D.getp(this._pid, 'db_password')}
  public set db_password(value: string) { 
    this.G.D.setp(this._pid, 'db_password', value); 
  }

  public get password(): string { return this.G.D.getp(this._pid, 'password'); }
  public set password(value: string) {
    this.G.D.setp(this._pid, 'password', value);
  }

  public get myvid(): string { return this.G.D.getp(this._pid, 'vid'); }
  public set myvid(value: string) {
    if (this.T.allvids_set.has(this.myvid)) {
      this.T.allvids_set.delete(this.myvid);
    }
    this.G.D.setp(this._pid, 'vid', value);
    this.T.allvids_set.add(value);
  }

  // state is stored both in user's and in poll's (if not draft) database:

  public get state(): poll_state_t { 
    // this is implemented as fast as possible because it is used so often
    return this._state as poll_state_t;
  }
  public set state(new_state: poll_state_t) {
    let old_state = this.state;
    var pd = null;
    if (old_state==new_state) return;
    if ({
          '': ['draft'], 
          'draft':['running'], 
          'running':['closed']
        }[old_state].includes(new_state)) {
        this.G.D.change_poll_state(this, new_state);
        this._state = new_state;
    } else {
      this.G.L.error("Poll invalid state transition from "+old_state+" to "+new_state);
    }
  }

  // all other attributes are accessed via setp, getp, 
  // which automatically use the user's database for state 'draft' 
  // and the poll's database otherwise (in which case they are also read-only).

  public get type(): poll_type_t { return this.G.D.getp(this._pid, 'type') as poll_type_t; }
  public set type(value: poll_type_t) { this.G.D.setp(this._pid, 'type', value); }

  public get language(): string { return this.G.D.getp(this._pid, 'language') as poll_type_t; }
  public set language(value: string) { this.G.D.setp(this._pid, 'language', value); }

  public get title(): string { return this.G.D.getp(this._pid, 'title'); }
  public set title(value: string) { this.G.D.setp(this._pid, 'title', value); }

  public get desc(): string { return this.G.D.getp(this._pid, 'desc'); }
  public set desc(value: string) { this.G.D.setp(this._pid, 'desc', value); }

  public get url(): string { return this.G.D.getp(this._pid, 'url'); }
  public set url(value: string) { this.G.D.setp(this._pid, 'url', value); }

  public get due_type(): poll_due_type_p { return this.G.D.getp(this._pid, 'due_type') as poll_due_type_p; }
  public set due_type(value: poll_due_type_p) { this.G.D.setp(this._pid, 'due_type', value); }

  // Date objects are stored as ISO strings:

  public get start_date(): Date {
    let str = this.G.D.getp(this._pid, 'start_date'); 
    return str==''?null:new Date(str); 
  }
  public set start_date(value: Date) { 
    this.G.D.setp(this._pid, 'start_date', 
      ((value||'')!='') && (value.getTime() === value.getTime()) ? value.toISOString() : ''); 
  }

  public get due_custom(): Date {
    let due_str = this.G.D.getp(this._pid, 'due_custom'); 
    return due_str==''?null:new Date(due_str); 
  }
  public set due_custom(value: Date) { 
    this.G.D.setp(this._pid, 'due_custom', 
      // TODO: improve validity check already in form field!
      ((value||'')!='') && (value.getTime() === value.getTime()) ? value.toISOString() : ''); 
  }

  public get due(): Date {
    let due_str = this.G.D.getp(this._pid, 'due'); 
    return due_str==''?null:new Date(due_str); 
  }
  public set due(value: Date) { 
    this.G.D.setp(this._pid, 'due', 
      // TODO: improve validity check already in form field!
      ((value||'')!='') && (value.getTime() === value.getTime()) ? value.toISOString() : ''); 
  }

  private _options: Record<string, Option> = {};
  public _add_option(o: Option) {
    this.G.L.entry("Poll._add_option");
    // will only be called by the option itself to self-register in its poll!
    if (o.oid in this._options) {
      return false;
    } else {
      this._options[o.oid] = o;
      return true;
    }
  }

  public get options(): Record<string, Option> { return this._options; }
  public remove_option(oid: string) {
    if (oid in this._options) {
      delete this._options[oid];
      return true;
    } else {
      return false;
    }
  }
  public get oids() { 
    this.G.L.entry("Poll.oids");
    let res = Object.keys(this._options); 
    this.G.L.exit("Poll.oids");
    return res;
  }
  public get n_options() { return this.oids.length; }

  public set_myrating(oid:string, value:number) {
    this.G.D.setv(this._pid, "rating." + oid, value.toString());
    this.update_rating(this.myvid, oid, value);
  }

  // OTHER HOOKS:

  public set_db_credentials() {
    // set db credentials according to this.db... settings:
    if (this.db=='central') {
      this.db_server_url = environment.data_service.central_db_server_url; 
      this.db_password = environment.data_service.central_db_password;
    } else if (this.db=='poll') {
      this.db_server_url = this.G.P.polls[this.db_from_pid].db_server_url;
      this.db_password = this.G.P.polls[this.db_from_pid].db_password;
    } else if (this.db=='other') {
      this.db_server_url = this.db_other_server_url;
      this.db_password = this.db_other_password;
    } else if (this.db=='default') {
      this.db_server_url = this.G.S.db_server_url;
      this.db_password = this.G.S.db_password;
    } 
    this.db_server_url = this.G.D.fix_url(this.db_server_url);
  }

  public set_due() {
    // set due according to due_type, current date, and due_custom:
    if (this.due_type=='custom') {
      this.due = this.due_custom;
    } else {
      var due = new Date(), 
          year = due.getFullYear(), 
          month = due.getMonth(), // 0=January!
          dayofmonth = due.getDate(), 
          dayofweek = due.getDay(),
          due_as_ms = due.getTime();
      if (this.due_type=='midnight') {
        due.setHours(23, 59, 59, 999); // almost midnight on the same day according to local time
      } else if (this.due_type=='10min') {
        due = new Date(due_as_ms + 10*60*1000);
      } else if (this.due_type=='hour')  {
        due = new Date(due_as_ms + 60*60*1000);
      } else if (this.due_type=='24hr')  {
        due = new Date(due_as_ms + 24*60*60*1000);
      } else if (this.due_type=='tomorrow-noon') {
        due = new Date(due_as_ms + 24*60*60*1000);
        due.setHours(12, 0, 0, 0);
      } else if (this.due_type=='tomorrow-night') {
        due = new Date(due_as_ms + 24*60*60*1000);
        due.setHours(23, 59, 59, 999); 
      } else if (this.due_type=='friday-noon') {
        due = new Date(due_as_ms + ((5-dayofweek)%7)*24*60*60*1000);
        due.setHours(12, 0, 0, 0); 
      } else if (this.due_type=='sunday-night') {
        due = new Date(due_as_ms + ((7-dayofweek)%7)*24*60*60*1000);
        due.setHours(23, 59, 59, 999); 
      } else if (this.due_type=='week')  {
        due = new Date(due_as_ms + 7*24*60*60*1000);
        due.setHours(23, 59, 59, 999); 
      } else if (this.due_type=='two-weeks')  {
        due = new Date(due_as_ms + 2*7*24*60*60*1000);
        due.setHours(23, 59, 59, 999); 
      } else if (this.due_type=='four-weeks') {
        due = new Date(due_as_ms + 4*7*24*60*60*1000);
        due.setHours(23, 59, 59, 999); 
      }
      this.due = due;
    }
    this.G.L.info("PollService.set_due", due);
  }

  public init_password() {
    // generate and store a random poll password:
    if ((this.password||'')=='') {
      this.password = this.G.P.generate_password(); 
      this.G.L.info("PollService.init_password", this.password);
    } else {
      this.G.L.error("Attempted to init_password() when password already existed.");
    }
  }

  public init_myvid() {
    this.myvid = this.G.P.generate_vid();
    this.G.L.info("PollService.init_vid", this.myvid);
  }

  public init_myratings() {
    for (let oid in this.options) {
      this.set_myrating(oid, 0);
    }
  }

  // TALLYING:

  /* Notes: 
  - For performance reasons, we use Maps instead of Records here. 
  - CAUTION: map entries are NOT accessed via [...] but via .get and .set !
  - all Map type variables are named ..._map to make this unmistakable.
  */

  T: { // T is short for "tally data"
    // for each pid, oid and vid, the rating (default: 0):
    ratings_map: Map<string, Map<string, number>>;
    // array of known vids:
    allvids_set: Set<string>;
    // number of voters known:
    n_voters: number;
    // for each oid, an array of ascending ratings: 
    ratings_ascending_map: Map<string, Array<number>>;
    // for each oid, the approval cutoff (rating at and above which option is approved):
    cutoffs_map: Map<string, number>;
    // for each oid and vid, the approval (default: false):
    approvals_map: Map<string, Map<string, boolean>>;
    // for each oid, the approval score:
    approval_scores_map: Map<string, number>;
    // for each oid, the total rating:
    total_ratings_map: Map<string, number>;
    // for each oid, the effective score:
    scores_map: Map<string, number>;
    // oids sorted by descending score:
    oids_descending: Array<string>; 
    // for each vid, the voted-for option (or "" for abstention):
    votes_map: Map<string, string>;
    // for each oid (and "" for abstaining), the number of votes:
    n_votes_map: Map<string, number>;
    // for each oid, the winning probability/share:
    shares_map: Map<string, number>;
  }

  tally_all() {
    // Called after initialization.
    // Tallies all. 
    this.G.L.entry("Poll.tally_all", this._pid);

    this.G.D.tally_caches[this._pid] = this.T = {
      ratings_map: this.G.P.ratings_map.get(this._pid),
      allvids_set: new Set(),
      n_voters: 0,
      ratings_ascending_map: new Map(),
      cutoffs_map: new Map(),
      approvals_map: new Map(),
      approval_scores_map: new Map(),
      total_ratings_map: new Map(),
      scores_map: new Map(),
      oids_descending: [],
      votes_map: new Map(),
      n_votes_map: new Map(),
      shares_map: new Map()
    }
    if (!this.T.ratings_map) {
      this.T.ratings_map = new Map();
      this.G.P.ratings_map.set(this._pid, this.T.ratings_map);
    }
    this.G.L.trace("Poll.tally_all ratings", this._pid, [...this.T.ratings_map.entries()]);
    // extract voters and total_ratings:
    for (let [oid, rs_map] of this.T.ratings_map) {
      console.log("Poll.tally_all rating HA");
      this.G.L.trace("Poll.tally_all rating", this._pid, oid, [...rs_map]);
      let t = 0;
      for (let [vid, r] of rs_map) {
        this.G.L.trace("Poll.tally_all rating", this._pid, oid, vid, r);
        this.T.allvids_set.add(vid);
        t += r;
      }
      this.T.total_ratings_map.set(oid, t);
    }
    this.T.n_voters = this.T.allvids_set.size;
    this.G.L.trace("Poll.tally_all voters", this._pid, this.T.n_voters, [...this.T.allvids_set]);
    // calculate cutoffs, approvals, and scores of all options:
    let score_factor = this.T.n_voters * 128;
    for (let [oid, rs_map] of this.T.ratings_map) {
      let rsasc = this.update_ratings_ascending(oid, rs_map);
      this.G.L.trace("Poll.tally_all rsasc", this._pid, oid, [...rs_map], [...rsasc]);
      this.update_cutoff_and_approvals(oid, rs_map, rsasc);
      let apsc = this.update_approval_score(oid, this.T.approvals_map.get(oid));
      this.update_score(oid, apsc, this.T.total_ratings_map.get(oid), score_factor);
      this.G.L.trace("Poll.tally_all aps, apsc, sc", this._pid, oid, this.T.approvals_map.get(oid), apsc, this.T.scores_map.get(oid));
    }
    this.G.L.trace("Poll.tally_all scores", this._pid, [...this.T.scores_map]);
    // order and calculate votes and shares:
    this.update_ordering();
    let oidsdesc = this.T.oids_descending;
    this.G.L.trace("Poll.tally_all oidsdesc", this._pid, oidsdesc);
    for (let vid of this.T.allvids_set) {
      this.update_vote(vid, oidsdesc);
    }
    this.G.L.trace("Poll.tally_all votes", this._pid, this.T.votes_map);
    this.update_shares(oidsdesc);
    this.G.L.trace("Poll.tally_all n_votes, shares", this._pid, [...this.T.n_votes_map], [...this.T.shares_map]);

    this.G.L.exit("Poll.tally_all", this._pid);
  }

  update_rating(vid:string, oid:string, value:number) {
    // Called whenever a rating is updated.
    // Updates a rating and all depending quantities up to the final shares.
    // Tries to do this as efficiently as possible.

    // if necessary, register voter:
    let n_changed = false;
    if (!this.T.allvids_set.has(vid)) {
      this.T.allvids_set.add(vid);
      this.T.n_voters = this.T.allvids_set.size;
      n_changed = true;
      this.G.L.trace("Poll.update_rating n_changed, first rating of voter", vid);
    }
    // if changed, update rating:
    if (!(oid in this.T.ratings_map)) {
      this.T.ratings_map.set(oid, new Map());
      this.G.L.trace("Poll.update_rating first rating for option", oid);
    }
    let rs_map = this.T.ratings_map.get(oid), old_value = rs_map.get(vid) || 0;
    if (value != old_value) {
      this.G.L.trace("Poll.update_rating rating of", oid, "by", vid, "changed from", old_value, "to", value);
      if (value != 0) {
        rs_map.set(vid, value);
      } else {
        rs_map.delete(vid);
      }
      // update depending data:

      // update ratings_ascending faster than by resorting:
      let rsasc = this.T.ratings_ascending_map.get(oid),
          index = rsasc.indexOf(old_value);
      // remove old value:
      rsasc = rsasc.slice(0, index).concat(rsasc.slice(index + 1));
      // insert new value at correct position:
      for (let index=0; index<rsasc.length; index++) {
        if (rsasc[index] >= value) {
          rsasc = rsasc.slice(0, index).concat([value]).concat(rsasc.slice(index));    
          break;
        }
      }
      if (rsasc.length < this.T.n_voters) {
        rsasc.push(value);
      }
      // store result back:
      this.T.ratings_ascending_map.set(oid, rsasc);

      // cutoff, approvals:
      let [cutoff, cutoff_changed, others_approvals_changed] = this.update_cutoff_and_approvals(oid, rs_map, rsasc);

      let vids_approvals_changed = false,
          aps_map = this.T.approvals_map.get(oid);
      if (!others_approvals_changed) {
        // update vid's approval since it has not been updated automatically by update_cutoff_and_approvals:
        let ap = (value >= cutoff);
        if (ap != aps_map.get(vid)) {
          aps_map.set(vid, ap);
          vids_approvals_changed = true;
        }
      }
      if (vids_approvals_changed || others_approvals_changed) {
        // update approval score:
        this.G.L.trace("Poll.update_rating approvals changed", vids_approvals_changed, others_approvals_changed);
        this.update_approval_score(oid, aps_map);
      }
      // update total ratings and score(s):
      let tr = this.T.total_ratings_map.get(oid) + value - old_value,
          score_factor = this.T.n_voters * 128;
      this.T.total_ratings_map.set(oid, tr);
      if (n_changed) {
        // update all scores:
        for (let oid2 of this.T.scores_map.keys()) {
          this.update_score(oid2, this.T.approval_scores_map.get(oid2), this.T.total_ratings_map.get(oid2), score_factor);
        }
      } else {
        // only update oid's score:
        this.update_score(oid, this.T.approval_scores_map.get(oid), tr, score_factor);
      }
      // update option ordering:
      let [oidsdesc, ordering_changed] = this.update_ordering();
      let votes_changed = false;
      if (ordering_changed || others_approvals_changed) {
        // update everyone's votes:
        this.G.L.trace("Poll.update_rating updating everyone's votes", ordering_changed);
        for (let vid2 of this.T.allvids_set) {
          votes_changed ||= this.update_vote(vid2, oidsdesc);
        }
      } else if (vids_approvals_changed) {
        // update only vid's vote:
        this.G.L.trace("Poll.update_rating updating vid's vote");
        votes_changed = this.update_vote(vid, oidsdesc);
      } else {
        // neither the ordering nor the approvals have changed, 
        // so the votes and winning probabilities/shared don't change either
      }
      if (votes_changed || n_changed) {
        // update winning probabilities/shares:
        this.G.L.trace("Poll.update_rating updating shares", votes_changed);
        let shares_changed = this.update_shares(oidsdesc);
        if (shares_changed) {
          // TODO: what?
        }
      }
    }
  }

  update_ratings_ascending(oid:string, rs_map:Map<string, number>): Array<number> {
    // sort ratings ascending:
    let rsasc_non0 = Array.from(rs_map.values()).sort() as Array<number>;
    // make sure array is correct length by padding with zeros:
    let rsasc = Array(this.T.n_voters - rsasc_non0.length).fill(0).concat(rsasc_non0);
    this.T.ratings_ascending_map.set(oid, rsasc);
    return rsasc;
  }

  update_cutoff_and_approvals(oid:string, rs_map:Map<string, number>, rsasc:Array<number>): [number, boolean, boolean] {
    // update approval cutoff:
    let cutoff = 100, cutoff_factor = 100 / this.T.n_voters;
    for (let index=0; index<this.T.n_voters; index++) {
      let r = rsasc[index];
      // check whether strictly less than r percent have a rating strictly less than r:
      let pct_less_than_r = cutoff_factor * index;
      if (pct_less_than_r < r) {
        cutoff = r;
        break;
      }
    }
    if (!(oid in this.T.approvals_map)) {
      this.T.approvals_map.set(oid, new Map());
    }
    // update approvals:
    let cutoff_changed = false,
        approvals_changed = false,
        aps_map = this.T.approvals_map.get(oid);
    if (cutoff != this.T.cutoffs_map.get(oid)) {
      // cutoff has changed, so update all approvals:
      cutoff_changed = true;
      this.G.L.trace("Poll.update_cutoff changed to", cutoff);
      for (let [vid2, r2] of rs_map) {
        let ap = (r2 >= cutoff);
        if (ap != aps_map.get(vid2)) {
          aps_map.set(vid2, ap);
          approvals_changed = true;  
        }
      }
    }
    return [cutoff, cutoff_changed, approvals_changed];
  }

  update_approval_score(oid:string, aps_map:Map<string, boolean>): number {
    let apsc = Array.from(aps_map.values()).filter(x => x==true).length;
    if (apsc != this.T.approval_scores_map.get(oid)) {
      this.T.approval_scores_map.set(oid, apsc);
    }
    return apsc;
  }

  update_score(oid:string, apsc:number, tr:number, score_factor:number) {
    this.T.scores_map.set(oid, apsc * score_factor + tr);
  }

  update_ordering(): [Array<string>, boolean] {
    let oidsdesc = [...this.T.scores_map]
          .sort(([oid1, sc1], [oid2, sc2]) => sc1 - sc2)
          .map(([oid2, sc2]) => oid2);
    // check whether ordering changed:
    let ordering_changed = false;
    for (let index=0; index<oidsdesc.length; index++) {
      if (oidsdesc[index] != this.T.oids_descending[index]) {
        ordering_changed = true;
        this.T.oids_descending = oidsdesc;
        break;
      }  
    }
    return [oidsdesc, ordering_changed];
  }

  update_vote(vid:string, oidsdesc:Array<string>): boolean {
    let vote = "", vote_changed = false;
    for (let oid2 of oidsdesc) {
      if (this.T.approvals_map.get(oid2).get(vid)) {
        vote = oid2;
        break;
      }
    }
    if (vote != this.T.votes_map.get(vid)) {
      this.T.votes_map.set(vid, vote);
      vote_changed = true;
    }
    return vote_changed;
  }

  update_shares(oidsdesc:Array<string>): boolean {
    let total_n_votes = 0,
        shares_changed = false;
    this.T.n_votes_map.set("", 0); 
    for (let oid2 of oidsdesc) {
      this.T.n_votes_map.set(oid2, 0);
    }
    for (let vid2 of this.T.allvids_set) {
      let vote = this.T.votes_map.get(vid2);
      this.T.n_votes_map.set(vote, this.T.n_votes_map.get(vote) + 1);
      if (vote != "") {
        total_n_votes++;
      }
    }
    if (total_n_votes > 0) {
      // shares are proportional to votes received:
      for (let oid2 of oidsdesc) {
        let share = this.T.n_votes_map.get(oid2) / total_n_votes;
        if (share != this.T.shares_map.get(oid2)) {
          this.T.shares_map.set(oid2, share);
          shares_changed = true;
        }
      }  
    } else {
      // all abstained, so shares are uniform:
      let k = oidsdesc.length;
      for (let oid2 of oidsdesc) {
        let share = 1 / k;
        if (share != this.T.shares_map.get(oid2)) {
          this.T.shares_map.set(oid2, share);
          shares_changed = true;
        }
      }  
    }
    return shares_changed;
  }

}



export class Option {

  private G: GlobalService;
  private p: Poll;

  constructor (G:GlobalService, poll:Poll, oid:string=null, 
               name:string=null, desc:string=null, url:string=null) { 
    // TODO: ensure uniqueness of name within poll!
    this.G = G;
    this.G.L.entry("Option constructor");
    this.p = poll;
    if (!oid) {
      oid = this.G.P.generate_oid(poll.pid);
      this.G.D.setp(poll.pid, 'option.'+oid+'.oid', oid);
      this.G.L.trace("...new option", poll.pid, oid);
    }
    this._oid = oid;
    if ((name||'')!='') this.G.D.setp(poll.pid, 'option.'+oid+'.name', name);
    if ((desc||'')!='') this.G.D.setp(poll.pid, 'option.'+oid+'.desc', desc);
    if ((url||'')!='') this.G.D.setp(poll.pid, 'option.'+oid+'.url', url);
    poll._add_option(this);
    this.G.L.exit("Option constructor");
  }

  delete() {
    this.p.remove_option(this.oid);
    this.G.D.delp(this.p.pid, 'option.'+this.oid+'.name');
    this.G.D.delp(this.p.pid, 'option.'+this.oid+'.desc');
    this.G.D.delp(this.p.pid, 'option.'+this.oid+'.url');
  }

  private _oid: string;
  public get oid(): string { return this._oid; }
  // oid is read-only, set at construction

  // all attributes are stored in the poll's database under keys of the form option.<oid>.<key>.
  // they may only be set at construction or changed while poll is in state 'draft':

  public get name(): string { return this.G.D.getp(this.p.pid, 'option.'+this._oid+'.name'); }
  public set name(value: string) { this.G.D.setp(this.p.pid, 'option.'+this._oid+'.name', value); }

  public get desc(): string { return this.G.D.getp(this.p.pid, 'option.'+this._oid+'.desc'); }
  public set desc(value: string) { this.G.D.setp(this.p.pid, 'option.'+this._oid+'.desc', value); }

  public get url(): string { return this.G.D.getp(this.p.pid, 'option.'+this._oid+'.url'); }
  public set url(value: string) { this.G.D.setp(this.p.pid, 'option.'+this._oid+'.url', value); }

}