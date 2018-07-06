import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FCM } from '@ionic-native/fcm';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { AdmincontentPage } from '../pages/admincontent/admincontent';
import { PasswordresetPage } from '../pages/passwordreset/passwordreset';
import { UserdetailsPage } from '../pages/userdetails/userdetails';
import { SratingPage } from '../pages/srating/srating';

import firebase from 'firebase';
import { firebaseConfig } from './credentials';
import { Unsubscribe } from '@firebase/util';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;

  constructor(private fcm: FCM, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    firebase.initializeApp(firebaseConfig);
    const unsubscribe: Unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.rootPage = HomePage;
        unsubscribe();
      } else {
        this.rootPage = 'LoginPage';
        unsubscribe();
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
            //Notifications
            fcm.subscribeToTopic('all');
            fcm.getToken().then(token=>{
                console.log(token);
            })
            fcm.onNotification().subscribe(data=>{
              if(data.wasTapped){
                console.log("Received in background");
              } else {
                console.log("Received in foreground");
              };
            })
            fcm.onTokenRefresh().subscribe(token=>{
              console.log(token);
            });
            //end notifications.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

