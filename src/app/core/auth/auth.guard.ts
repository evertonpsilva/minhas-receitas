import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { UserService } from "../user/user.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate{

    constructor(private router: Router, private userService: UserService){ }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        if(!this.userService.isLogged()){
            this.router.navigate(['/']);
            return false;
        }
        return true;
    }

}