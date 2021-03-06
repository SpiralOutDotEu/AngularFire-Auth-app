import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './auth.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, public router: Router) {}

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> {
    return this.auth.authenticated().map(authenticated => {
      if (!authenticated) {
        this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
        return false;
      } else {
        return true;
      }
    }).take(1);
  }
}
