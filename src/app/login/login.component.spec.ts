import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginComponent} from './login.component';
import {AuthService} from '../core/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

describe('LoginComponent', () => {

  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockAuth: any;
  let mockRouter: any;
  let mockActivatedRoute: any;
  let htmlElement: any;
  let button: any;
  let authService: any;
  let router: any;
  let activatedRoute: any;

  mockAuth = jasmine.createSpyObj(mockAuth, {
    loginWithGoogle: Promise.resolve()
  });
  mockRouter = jasmine.createSpyObj(mockRouter, {
    navigateByUrl: Promise.resolve()
  });
  mockActivatedRoute = {
    snapshot: jasmine.createSpyObj('snapshot', {
      'queryParams': null
    })
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [
        {provide: AuthService, useValue: mockAuth},
        {provide: Router, useValue: mockRouter},
        {provide: ActivatedRoute, useValue: mockActivatedRoute},
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    htmlElement = fixture.nativeElement;
    button = htmlElement.querySelector('button');
    authService = TestBed.get(AuthService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows a button to \'login with Google\'', () => {
    expect(button.textContent).toEqual('Login with Google');
  });

  it('click on \login with Google\' calls \'loginWithGoogle()\'', async( () => {
    spyOn(component, 'loginWithGoogle').and.callThrough();
    (component.loginWithGoogle as jasmine.Spy).calls.reset();
     button.click();
    fixture.whenStable().then(() => {
      expect(component.loginWithGoogle).toHaveBeenCalled();
    });
  }));

  it('\'loginWithGoogle\' calls \'loginWithGoogle\' from AuthService', async( () => {
    authService.loginWithGoogle.calls.reset();
    component.loginWithGoogle();
    expect(authService.loginWithGoogle).toHaveBeenCalledTimes(1);
  }));

  describe('On successfull login:', () => {
    beforeEach(() => {
      router = TestBed.get(Router);
      activatedRoute = TestBed.get(ActivatedRoute);
    });

    it('redirects to \'\\user\'', () => {
      mockRouter.navigateByUrl.calls.reset();
      component.loginWithGoogle();
      fixture.whenStable().then(() => {
        expect(mockRouter.navigateByUrl).toHaveBeenCalledTimes(1);
        expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('user');
      });
    });

    it('redirects to requested url from params, if provided', () => {
      activatedRoute.snapshot.queryParams['returnUrl'] = 'some url' ;
      mockRouter.navigateByUrl.calls.reset();
      component.loginWithGoogle();
      fixture.whenStable().then(() => {
        expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('some url');
      });
    });
  });

});
