import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {}

  loginWithGoogle() {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    googleAuthProvider.setCustomParameters({
      prompt: 'select_account'
    });
    return this.afAuth.auth.signInWithPopup(googleAuthProvider);
  }

  displayName(): Observable<string> {
    return this.afAuth.authState.map(user => user.displayName ? user.displayName : '');
  }

  authenticated(): Observable<boolean> {
    return this.afAuth.authState.map(user =>  !!user);
  }

  logOut(): void {
    this.afAuth.auth.signOut();
  }
}
