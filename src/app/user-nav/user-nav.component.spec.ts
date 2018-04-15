import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserNavComponent} from './user-nav.component';
import {AuthService} from '../core/auth.service';
import {By} from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';

describe('UserNavComponent', () => {
  let component: UserNavComponent;
  let fixture: ComponentFixture<UserNavComponent>;

  let mockAuth: any;
  mockAuth = jasmine.createSpyObj(mockAuth, {
    logOut: Promise.resolve()
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserNavComponent ],
      imports: [ RouterTestingModule ],
      providers: [
        { provide: AuthService, useValue: mockAuth}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('provides a link to users home \'\/user\'', () => {
    this.userHomeLink = fixture.debugElement.query(By.css('#userHomeLink')).nativeElement;
    expect(this.userHomeLink.getAttribute('href')).toEqual('/user');
    expect(this.userHomeLink.innerHTML).toEqual('Home');
  });

  it('provides a link to logOut ', () => {
    this.logOutLink = fixture.debugElement.query(By.css('#logOutLink')).nativeElement;
    spyOn(component, 'logOut').and.callThrough();
    this.logOutLink.click();
    expect(component.logOut).toHaveBeenCalled();
  });

  it('logOut() calls AuthService.logOut()', () => {
    mockAuth.logOut.calls.reset();
    component.logOut();
    expect(mockAuth.logOut).toHaveBeenCalled();

  });

});
