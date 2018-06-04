import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import firebase from 'firebase';
import {ChatProvider} from '../../providers/chat/chat';

/**
 * Generated class for the AdmincontentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admincontent',
  templateUrl: 'admincontent.html',
})
export class AdmincontentPage {
  database = firebase.database();
  users = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public chatservice: ChatProvider) {
  }

  ionViewDidLoad() {
    this.users = [];
    //var userId = firebase.auth().currentUser.uid;
    let temp;
    const personRef: firebase.database.Reference = firebase.database().ref(`/requests`);
    personRef.once('value', personSnapshot => {
      temp = personSnapshot.val();
      for(var tempkey in temp){
        this.users.push(temp[tempkey]);
      }
    //  this.events.publish('requests');
    });
  }
  
  openUser(){
    this.navCtrl.push('UserdetailsPage');
  }
}
