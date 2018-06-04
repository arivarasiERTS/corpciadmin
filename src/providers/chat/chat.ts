import { Injectable } from '@angular/core';
import firebase from 'firebase';

/*
  Generated class for the ChatProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChatProvider {
  firedata = firebase.database().ref('/requests');
selected;
reqmsg;
nameg;
phoneg;
selg;
msgg;
rating;
  constructor() {  
  }


}
