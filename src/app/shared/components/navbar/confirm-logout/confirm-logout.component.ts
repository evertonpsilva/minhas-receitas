import { Component, OnInit } from "@angular/core";
import { UserService } from "../../../../core/user/user.service";

@Component({
    templateUrl: './confirm-logout.component.html',
    styleUrls: ['./confirm-logout.component.scss'],
})
export class ConfirmLogoutComponent implements OnInit{

    constructor(private userService: UserService){

    }

    ngOnInit(){

    }

    logout(){
        this.userService.logout();
    }

}