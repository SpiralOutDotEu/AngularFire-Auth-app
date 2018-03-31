import { Component, OnInit } from '@angular/core';
import {AuthService} from '../core/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  returnUrl: string;

  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'user';
  }

  loginWithGoogle() {
    this.auth.loginWithGoogle().then(() => {
      this.router.navigateByUrl(this.returnUrl);
    });
  }
}
