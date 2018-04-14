import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GuestNavComponent} from './guest-nav.component';
import {RouterTestingModule} from '@angular/router/testing';
import {By} from '@angular/platform-browser';

describe('GuestNavComponent', () => {
  let component: GuestNavComponent;
  let fixture: ComponentFixture<GuestNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestNavComponent ],
      imports: [ RouterTestingModule ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('provides a link to Home \'\/\'', () => {
    this.homeLink = fixture.debugElement.query(By.css('#homeLink')).nativeElement;
    expect(this.homeLink.getAttribute('href')).toEqual('/');
    expect(component).toBeTruthy();
  });

  it('provides a link to login \'/\login\'', () => {
    this.homeLink = fixture.debugElement.query(By.css('#loginLink')).nativeElement;
    expect(this.homeLink.getAttribute('href')).toEqual('/login');
    expect(component).toBeTruthy();
  });
});
