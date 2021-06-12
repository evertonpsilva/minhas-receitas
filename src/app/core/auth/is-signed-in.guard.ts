import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { UserService } from "../user/user.service";

@Injectable()
export class IsSignedInguard implements CanActivate {

    constructor(private userService: UserService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      if (this.userService.isLogged()) {
        this.router.navigate(['dashboard']); // or home
        return false;
      }
      return true;
    }
    
}