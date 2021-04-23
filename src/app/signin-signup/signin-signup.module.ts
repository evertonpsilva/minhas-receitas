import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";


import { SignInSignUpRoutingModule } from "./signin-signup-routing.module";
import { SignInComponent } from "./signin/signin.component";
import { SignUpComponent } from "./signup/signup.component";
import { SignInSignUpComponent } from "./signin-signup.component";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        SignInSignUpRoutingModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        CommonModule
    ],
    declarations: [
        SignInSignUpComponent,
        SignInComponent,
        SignUpComponent,
    ]
})
export class SignInSignUpModule{ }