import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/core/user/user.service";

@Component({
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss'],
})
export class SignInComponent implements OnInit {

    signInForm: FormGroup;
    visiblePassword: boolean = false;

    constructor(
        private fb: FormBuilder, 
        private userService: UserService, 
        private router: Router
    ){ }

    ngOnInit(){
        this.buildForm();
    }

    buildForm(): void{
        this.signInForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]]
        });
    }

    getErrorEmail() {
        if (this.email.hasError('required')) {
          return 'You must enter a value';
        }
    
        return this.email.hasError('email') ? 'Not a valid email' : '';
    }

    getErrorPassword() {
        return 'You must enter a value';
    }

    get email(){
        return this.signInForm.get('email');
    }

    get password(){
        return this.signInForm.get('password');
    }

    toggleVisibilityPassword(){
        this.visiblePassword = !this.visiblePassword;
    }

    login(){
        this.userService.login(this.email.value, this.password.value).subscribe();
    }

}
