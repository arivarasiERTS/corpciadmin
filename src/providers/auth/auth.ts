import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { User } from '@firebase/auth-types';

@Injectable()
export class AuthProvider {
  constructor() {}

  loginUser(email: string, password: string): Promise<User> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  async signupUser(email: string, password: string, name: string, place: string, phone: string): Promise<User> {
    try {
      const newUser: User = await firebase
        .auth()
        .createUserWithEmailAndPassword(email,password);

      await firebase
        .database()
        .ref(`/admin/${firebase.auth().currentUser.uid}/email`)
        .set(email);
        firebase.database().ref(`/admin/${firebase.auth().currentUser.uid}/name`).set(name);
        firebase.database().ref(`/admin/${firebase.auth().currentUser.uid}/place`).set(place);
        firebase.database().ref(`/admin/${firebase.auth().currentUser.uid}/phone`).set(phone);
      return newUser;
    } catch (error) {
      throw error;
    }
  }

  resetPassword(email: string): Promise<void> {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  logoutUser(): Promise<void> {
    return firebase.auth().signOut();
  }
}
