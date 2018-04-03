import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {Component} from '@angular/core';
import {AuthService} from './core/auth.service';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-guest-nav',
  template: ''
})
class MockGuestNavComponent {
}

@Component({
  selector: 'app-user-nav',
  template: ''
})
class MockUserNavComponent {
}

let mockAuthState: BehaviorSubject<boolean>;
mockAuthState = new BehaviorSubject(false);


class MockAuthService {
  authenticated() {
    return mockAuthState.asObservable(); }
}

let component: AppComponent;
let fixture: ComponentFixture<AppComponent>;
let authService: AuthService;

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        MockGuestNavComponent,
        MockUserNavComponent
      ],
      providers: [
        {provide: AuthService, useClass: MockAuthService}
      ]
    }).compileComponents().then(() => {
      mockAuthState.next(true);
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      authService = TestBed.get(AuthService);
    });
  }));

  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should show only user nav bar for authenticated user', fakeAsync(() => {
    const compiled = fixture.debugElement.nativeElement;
    mockAuthState.next(true);
    tick();
    fixture.detectChanges();
    expect(compiled.querySelector('app-user-nav')).not.toBe(null);
    expect(compiled.querySelector('app-guest-nav')).toBe(null);
  }));

  it('should show only guest nav bar for unauthenticated user', fakeAsync(() => {
    const compiled = fixture.debugElement.nativeElement;
    mockAuthState.next(false);
    tick();
    fixture.detectChanges();
    expect(compiled.querySelector('app-user-nav')).toBe(null);
    expect(compiled.querySelector('app-guest-nav')).not.toBe(null);
  }));
});
