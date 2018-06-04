import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import firebase from 'firebase';
import {ChatProvider} from '../../providers/chat/chat';

/**
 * Generated class for the UserdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userdetails',
  templateUrl: 'userdetails.html',
})
export class UserdetailsPage {
  database = firebase.database();
  users = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.users = [];
    //var userId = firebase.auth().currentUser.uid;
    let temp;
    const personRef: firebase.database.Reference = firebase.database().ref(`/userProfile`);
    personRef.once('value', personSnapshot => {
      temp = personSnapshot.val();
      for(var tempkey in temp){
        this.users.push(temp[tempkey]);
      }
    //  this.events.publish('requests');
    });
  }
  

}
