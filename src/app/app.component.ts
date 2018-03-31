import { Component } from '@angular/core';
import { AuthService } from './core/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  authenticated = false;
  constructor(private auth: AuthService) {
    auth.authenticated().subscribe(data => this.authenticated = data);
  }

}
