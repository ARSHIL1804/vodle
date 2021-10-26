import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GlobalService } from './global.service';

import * as PouchDB from 'pouchdb/dist/pouchdb';

import * as CryptoJS from 'crypto-js';
const crypto_algorithm = 'des-ede3';

// some keys are only stored locally and not synced to a remote CouchDB:
const local_only_keys = ['email', 'password', 'db_url', 'db_username', 'db_password'];
const keys_triggering_data_move = ['email', 'password', 'db_url', 'db_username', 'db_password'];

function encrypt(value, password:string) {
  const result = CryptoJS.AES.encrypt(''+value, password).toString();
//  console.log("encrypted "+value+" to "+result);
  return result;
}

function decrypt(value:string, password:string) {
  const result = CryptoJS.AES.decrypt(value, password).toString(CryptoJS.enc.Utf8);
//  console.log("decrypted "+value+" to "+result);
  return result;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public G: GlobalService;
  public page; // current page, used for notifying of changes via its pc_changed() method
  
  private user_cache: {}; // temporary storage of user data
  private local_only_user_DB: PouchDB.Database; // persistent storage of local-only user data
  private local_synced_user_DB: PouchDB.Database; // persistent local copy of synced user data
  private remote_user_DB: PouchDB.Database; // persistent remote copy of synced user data

  private pids: Set<string>; // list of pids 
  private poll_caches: {}; // temporary storage of poll data
  private local_poll_DBs: {}; // persistent local copies of this user's part of the poll data
  private remote_poll_DBs: {}; // persistent remote copies of complete poll data

  constructor(
    public translate: TranslateService,
  ){
    this.user_cache = {};
    this.local_only_user_DB = new PouchDB('local_only_user');
    this.local_synced_user_DB = new PouchDB('local_synced_user');
    this.start_user_sync();
    this.fill_user_cache();
    for (let pid of this.pids) {
      this.local_poll_DBs[pid] = new PouchDB('local_poll_'+pid);
//      this.start_poll_sync(pid);
      this.fill_poll_cache(pid);
    }
  }

  public getu(key:string):string {
    // get user data item
    let value = this.user_cache[key];
    console.log("getu "+key+": "+value);
    return value;
  }
  public getp(pid:string, key:string):string {
    // get poll data item
    let value = this.poll_caches[pid][key];
    console.log("getp "+pid+"/"+key+": "+value);
    return value;
  }

  public setu(key:string, value:string) {
    // set user data item
    if (key=='language') {
      this.translate.use(value);      
    }
    var old_values = {};
    if (keys_triggering_data_move.includes(key)) {
      // remember old credentials:
      for (let k of keys_triggering_data_move) {
        old_values[k] = this.user_cache[k];
      }
    }
    this.user_cache[key] = value;
    console.log("setu "+key+": "+value);
    if (keys_triggering_data_move.includes(key)) {
      this.move_user_data(old_values);
    }
    return this.store_user_data(key, value);
  }
  public setp(pid:string, key:string, value:string) {
    // set poll data item
    this.poll_caches[pid][key] = value;
    console.log("setp "+pid+"/"+key+": "+value);
    return this.store_poll_data(pid, key, value);
  }

  private fill_user_cache() {
    // fills temporary cache with values from persistent DBs.
    this.pids = new Set();
    this.poll_caches = {};
    this.local_poll_DBs = {};
    this.remote_poll_DBs = {};
    // fetch all local-only docs:
    this.local_only_user_DB.allDocs({
      include_docs: true
    }).then(this.process_local_only_user_docs.bind(this)).catch(err => {
      console.log(err);
    });
  }
  private process_local_only_user_docs(result) {
    // process all local-only docs:
    for (let row of result.rows) {
      let doc = row.doc, key = doc['_id'], value = doc['val'];
      this.user_cache[key] = value;
      console.log("fill_cache "+key+": "+value);
      if (key=='language') {
        this.translate.use(value);      
      }
    }
    // now fetch all synced docs:
    let pw = this.user_cache['password'];
    this.local_synced_user_DB.allDocs({
      include_docs: true
    }).then(this.process_synced_user_docs.bind(this)).catch(err => {
      console.log(err);
    });
  }
  private process_synced_user_docs(result) {
    // decrypt and process all synced docs:
    for (let row of result.rows) {
      this.doc2user_cache(row.doc);
    }
    this.page.pc_changed();
  }

  private fill_poll_cache(pid:string) {
    // fills temporary cache with values from persistent DBs.
    // read and decrypt all synced docs:
    this.local_poll_DBs[pid].allDocs({
      include_docs: true
    }).then(this.process_poll_docs(pid).bind(this)).catch(err => {
      console.log(err);
    });
  }
  private process_poll_docs(pid) { return result => {
    for (let row of result.rows) {
      this.doc2poll_cache(pid, row.doc);
    }
    console.log("fetched data for poll "+pid);
  }}

  private store_all_userdata() {
    // stores user_cache in suitable DBs. 
    for (let [key, value] of Object.entries(this.user_cache)) {
      this.store_user_data(key, value as string);
    }
  }
  private store_all_polldata(pid:string) {
    // stores poll_cache[pid] in suitable DBs. 
    for (let [key, value] of Object.entries(this.poll_caches[pid])) {
      this.store_poll_data(pid, key, value as string);
    }
  }

  private store_user_data(key:string, value:string) {
    // stores key and value in suitable DB. 
    var doc;
    if (local_only_keys.includes(key)) {
      // simply use key as doc id and don't encrypt:
      this.local_only_user_DB.get(key).then(doc => {
        doc.val = value;
        this.local_only_user_DB.put(doc);
      }).catch(err => {
        doc = {_id:key, val:value};
        this.local_only_user_DB.put(doc);  
      });
    } else {
      // store encrypted and marked with email as owner: //, device and timestamp:
      let email = this.user_cache['email'], pw = this.user_cache['password'];
      if ((email=='')||(!email) || (pw=='')||(!pw)) {
        console.log("WARNING: couldn't set "+key+" in local_synced_used_DB since email or password are missing!");
        return false;
      }
      let enc_email = encrypt(email, pw), _id = enc_email+'/'+key, val = encrypt(value, pw);
      this.local_synced_user_DB.get(_id).then(doc => {
        doc.val = val;
  //        doc.dev = encrypt('TODO:device_ID', pw),
  //        doc.ts = encrypt(new Date(), pw),
        this.local_synced_user_DB.put(doc);
      }).catch(err => {
        doc = {
          '_id': _id, 
          'em': enc_email,  // will be used to filter what is synced!
          'key': key,
          'val': val,
  //        'dev': encrypt('TODO:device_ID', pw),
  //        'ts': encrypt(new Date(), pw),
        };
        this.local_synced_user_DB.put(doc);  
      })
    }
    return true;
  }
  private store_poll_data(pid:string, key:string, value:string) {
    // stores key and value in suitable DB. 
    var doc;
    // store encrypted and marked with voter id as owner: //, device and timestamp:
    let db = this.local_poll_DBs[pid], pw = this.user_cache["pid."+pid+'.password'], vid = this.user_cache["pid."+pid+'.voter_id'];
    if ((db=='')||(!db) || (pw=='')||(!pw) || (vid=='')||(!vid)) {
      console.log("WARNING: couldn't set "+key+" in local_poll_DB since db or poll password or voter id are missing!");
      return false;
    }
    doc = {
      '_id': pid+'/'+key,
      'pid': pid,  // will be used to filter what is synced! 
      'vid': vid,  // will be used to filter what is synced!
      'key': key,
      'val': encrypt(value, pw),
//      'dev': encrypt('TODO:device_ID', pw),
//      'ts': encrypt(new Date(), pw),
    };
    db.put(doc);
    return true;
  }

  private start_user_sync() {
    if (this.remote_user_DB) { 
      this.local_synced_user_DB.sync(this.remote_user_DB, {
        live: true,
        retry: true,
        include_docs: true
      }).on('change', this.handle_user_db_change
      ).on('paused', info => {
        // replication was paused, usually because of a lost connection
        console.log("pausing user data syncing");
      }).on('active', info => {
        // replication was resumed
        console.log("resuming user data syncing");
      }).on('error', err => {
        // totally unhandled error (shouldn't happen)
        console.log("ERROR: "+err);
      });
      return true;
    } else return false;
  }

  private move_user_data(old_values) {
    // TODO!
  }

  private handle_user_db_change(change) {
    if (change.deleted){
      var key = change.doc['key'];
      delete this.user_cache[key];
    } else {
      this.doc2user_cache(change.doc);
    }    
  }

  private doc2user_cache(doc) {
    var key = doc['key'], value = decrypt(doc['val'], this.user_cache['password']);
    this.user_cache[key] = value;
    console.log("doc2user_cache "+key+": "+value);
    if (key.startsWith('pid/') && key.endsWith('/pid')) {
      let pid = value;
      this.pids.add(pid);
    }
  }
  private doc2poll_cache(pid, doc) {
    var key = doc['key'], value = decrypt(doc['val'], this.user_cache["pid."+pid+'.password']);
    this.poll_caches[pid][key] = value;
    console.log("doc2poll_cache "+pid+"/"+key+": "+value);
  }

}