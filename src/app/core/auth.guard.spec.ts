import {inject, TestBed} from '@angular/core/testing';

import {AuthGuard} from './auth.guard';
import {AuthService} from './auth.service';
import {ActivatedRouteSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

describe('AuthGuard', () => {
  let authGuard: AuthGuard;
  let authService: any;
  let router: any;
  let mockAuth: any;

    mockAuth = jasmine.createSpyObj(mockAuth, ['authenticated']);

  const mockRouter: any = {
    navigate: function() { return Promise.resolve(); },
  };

  const mockRouterStateSnapshot: any = {
    url: 'user',
    toString: 'user'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard,
        {provide: AuthService, useValue: mockAuth},
        {provide: Router, useValue: mockRouter},
      ]
    });
    authGuard = TestBed.get(AuthGuard);
    authService = TestBed.get(AuthService);
    router = TestBed.get(Router);
  });

  it('should be created', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));

  describe('when canActivate() is called from an Authenticated user, it:', () => {
    mockAuth.authenticated.and.returnValue(Observable.of(true));

    it(' returns true ', () => {
      authGuard.canActivate(new ActivatedRouteSnapshot(), mockRouterStateSnapshot)
        .map(result => expect(result).toEqual(true));
    });

  });

  describe('when canActivate() is called from an Unauthenticated user, it:', () => {
    let result;

    beforeEach(() => {
      mockAuth.authenticated.and.returnValue(Observable.of(false));
    });

    it('returns false ', () => {
      authGuard.canActivate(new ActivatedRouteSnapshot(), mockRouterStateSnapshot)
        .subscribe(e => result = e);
      expect(result).toEqual(false);
    });

    it('redirects to \'login\' and passes the requested URL ', () => {
      spyOn(router, 'navigate').and.callThrough();
      authGuard.canActivate(new ActivatedRouteSnapshot(), mockRouterStateSnapshot)
        .subscribe(e => result = e);
      expect(router.navigate).toHaveBeenCalledWith(['login'], {queryParams: {returnUrl: mockRouterStateSnapshot.url}});
    });
  });

});
