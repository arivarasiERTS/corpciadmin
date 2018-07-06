import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import {ChatProvider} from '../../providers/chat/chat';

/**
 * Generated class for the SratingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-srating',
  templateUrl: 'srating.html',
})
export class SratingPage {
  database = firebase.database();
ratings = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.ratings = [];
    //var userId = firebase.auth().currentUser.uid;
    let temp;
    const personRef: firebase.database.Reference = firebase.database().ref(`/rating`);
    personRef.once('value', personSnapshot => {
      temp = personSnapshot.val();
      for(var tempkey in temp){
        this.ratings.push(temp[tempkey]);
      }
    //  this.events.publish('requests');
    });
  }

}
