import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  UserOnline$$: BehaviorSubject<boolean>;
  UserOnline = false;

  authState: Observable<firebase.User>;
  user: firebase.User;


  constructor(public afAuth: AngularFireAuth) {
    this.UserOnline$$ = new BehaviorSubject(false);
  }


  initService() {
    this.authState = this.afAuth.authState;
    this.authState.subscribe(user => {
      this.user = user;
      this.userStateChange();
    });
  }


  userStateChange() {
    if ((this.user != null) && (this.user.uid !== undefined)) {
      this.UserOnline = true;
    } else {
      this.UserOnline = false;
    }
    this.UserOnline$$.next(this.UserOnline);
  }


  loginUser(email, password): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }


  logoutUser() {
    return this.afAuth.auth.signOut();
  }

}
