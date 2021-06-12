import { Component } from "@angular/core";
import { Router, RouterOutlet } from "@angular/router";
import { fadeAnimation } from "../shared/animations/fade-animation";

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [
      fadeAnimation
    ],
})
export class DashboardComponent{

    constructor(
        private router: Router
    ){}

    prepareRoute(outlet: RouterOutlet) {
      return outlet.isActivated ? outlet.activatedRoute : '';
    }
  
    get showToolbar(){ 
      return !this.router.url.includes('login') && !this.router.url.includes('404');
    }

}