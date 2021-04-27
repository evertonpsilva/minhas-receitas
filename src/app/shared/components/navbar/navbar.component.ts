import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from '../../../core/user/user.service';
import { ConfirmLogoutComponent } from './confirm-logout/confirm-logout.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  logout(){
    this.dialog.open(ConfirmLogoutComponent);
  }

  goToPage(route: string){
    this.router.navigate([route]);
  }

}
