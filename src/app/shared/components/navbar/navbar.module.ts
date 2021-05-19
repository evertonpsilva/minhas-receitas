import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { ConfirmLogoutComponent } from "./confirm-logout/confirm-logout.component";
import { MatDialogModule } from "@angular/material/dialog";

import { NavbarComponent } from "./navbar.component";
import { RouterModule } from "@angular/router";
@NgModule({
    declarations: [ NavbarComponent, ConfirmLogoutComponent ],
    exports: [ NavbarComponent ],
    entryComponents: [ ConfirmLogoutComponent ],
    imports: [ 
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
        MatDialogModule,
        RouterModule,
    ]
})
export class NavBarModule{ }