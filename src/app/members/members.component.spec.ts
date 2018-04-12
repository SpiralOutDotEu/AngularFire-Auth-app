import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MembersComponent} from './members.component';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../core/auth.service';

describe('MembersComponent', () => {
  let component: MembersComponent;
  let fixture: ComponentFixture<MembersComponent>;

  let mockAuth: any;
  mockAuth = jasmine.createSpyObj(mockAuth, {
    displayName: Observable.of('display name')
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembersComponent ],
      providers: [
        {provide: AuthService, useValue: mockAuth}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows a greeting with user\'s display name', () => {
    this.htmlElement = fixture.nativeElement;
    this.p = this.htmlElement.querySelector('p');
    expect(this.p.textContent).toContain('Hi member display name');
  });
});
