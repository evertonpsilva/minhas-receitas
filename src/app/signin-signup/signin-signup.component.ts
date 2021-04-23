import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { fadeAnimation } from "../shared/animations/fade-animation";

@Component({
    templateUrl: './signin-signup.component.html',
    styleUrls: ['./signin-signup.component.scss'],
    animations: [
        fadeAnimation
    ],
})
export class SignInSignUpComponent{

    prepareRoute(outlet: RouterOutlet) {
        return outlet.isActivated ? outlet.activatedRoute : '';
    }

}