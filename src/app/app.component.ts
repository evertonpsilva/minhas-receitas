import { HttpResponseBase } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { skip } from 'rxjs/operators';
import { UserService } from './core/user/user.service';
import { fadeAnimation } from './shared/animations/fade-animation';
import { HttpMessageComponent } from './shared/components/http-message/http-message.component';
import { HttpMessageService } from './shared/components/http-message/http-message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fadeAnimation
  ],
})
export class AppComponent implements OnInit, OnDestroy{

  private httpResponseSubscription: Subscription;
  private userSubscription: Subscription;

  constructor(
    private dialog: MatDialog, 
    private httpMessageService: HttpMessageService, 
    private userService: UserService,
    private router: Router
  ) { }
  
  ngOnInit(): void {

    this.userSubscription = this.userService.getUser().pipe(skip(1)).subscribe((user) => {
      if(user){
        this.router.navigate(['/home']);
      }else{
        this.router.navigate(['/login']);
      }
    });

    this.httpResponseSubscription = this.httpMessageService.httpResponse.pipe(skip(1)).subscribe((httpResponse) => {
      console.log(httpResponse);
      if(!httpResponse.ok){
        this.dialog.open(HttpMessageComponent, {
          width: '45hw',
          data: httpResponse
        })
      }
    });
  }

  ngOnDestroy(): void{
    this.httpResponseSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

}
