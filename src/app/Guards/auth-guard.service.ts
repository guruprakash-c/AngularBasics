import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class AuthGuardService implements CanActivate {
  isLoggedIn:boolean = false;
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if(confirm("Do you want to access the Users page?")){
        sessionStorage.setItem('isLoggedIn', 'true');
    }
    if(sessionStorage.getItem('isLoggedIn') === 'true') this.isLoggedIn = true;
    return this.isLoggedIn;
  }
}