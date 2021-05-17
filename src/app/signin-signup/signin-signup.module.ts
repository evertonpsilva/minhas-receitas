import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MatDialogModule } from "@angular/material/dialog";

import { SignInSignUpRoutingModule } from "./signin-signup-routing.module";
import { SignInComponent } from "./signin/signin.component";
import { SignUpComponent } from "./signup/signup.component";
import { SignInSignUpComponent } from "./signin-signup.component";
import { UserCreatedComponent } from './signup/user-created/user-created.component';

@NgModule({
    imports: [
        SignInSignUpRoutingModule,
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
    ],
    declarations: [
        SignInSignUpComponent,
        SignInComponent,
        SignUpComponent,
        UserCreatedComponent,
    ],
    entryComponents: [
        UserCreatedComponent
    ]
})
export class SignInSignUpModule{ }