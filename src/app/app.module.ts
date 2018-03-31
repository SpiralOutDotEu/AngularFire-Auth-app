import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { GuestComponent } from './guest/guest.component';
import { MembersComponent } from './members/members.component';
import { CoreModule } from './core/core.module';
import { GuestNavComponent } from './guest-nav/guest-nav.component';
import { UserNavComponent } from './user-nav/user-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GuestComponent,
    MembersComponent,
    GuestNavComponent,
    UserNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
