import {Component, OnInit} from '@angular/core';
import {AuthService} from '../core/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  loginWithGoogle() {
    this.auth.loginWithGoogle().then(() => {
      this.router.navigateByUrl(this.route.snapshot.queryParams['returnUrl'] || 'user');
    });
  }
}
