import {inject, TestBed} from '@angular/core/testing';
import {AuthService} from './auth.service';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;


let authService: AuthService;
let afAuth: AngularFireAuth;

describe('AuthService', () => {

  const mockUser = {
    displayName: 'displayName',
    email: 'some@email.com',
    uid: '123456'
  };

  const mockAngularFireAuth: any = {
    auth: jasmine.createSpyObj('auth' , {
      'signInWithPopup': Promise.resolve(),
      'signOut': Promise.resolve()
    }),
    authState: Observable.of(mockUser),
  };

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [AuthService,   {provide: AngularFireAuth, useValue: mockAngularFireAuth}],
    });
    afAuth = TestBed.get(AngularFireAuth);
    authService = TestBed.get(AuthService);
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  it('loginWithGoogle() enables Google login with popup', () => {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    googleAuthProvider.setCustomParameters({
      prompt: 'select_account'
    });
    expect(authService.loginWithGoogle()).toEqual(jasmine.any(Promise));
    expect(afAuth.auth.signInWithPopup).toHaveBeenCalledWith(googleAuthProvider);
  });

  it('displayName() returns an observable to display name', () => {
    mockUser.displayName = 'a name';
    authService.displayName().subscribe(result => expect(result).toBe('a name'));
  });

  it('displayName() returns an empty string if there is no display name', () => {
    mockUser.displayName = null;
    authService.displayName().subscribe(result => expect(result).toBe(''));
  });

  it('authenticated() returns an observable of true only if the mockUser is authenticated', () => {
    afAuth.authState = Observable.of(null);
    authService.authenticated().subscribe(result => expect(result).toBe(false));
    afAuth.authState = Observable.of(mockUser);
    authService.authenticated().subscribe(result => expect(result).toBe(true));
  });

  it('logOut() calls signOut() from angularFire ', () => {
    authService.logOut();
    expect(afAuth.auth.signOut).toHaveBeenCalled();
  });

});
