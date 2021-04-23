import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss'],
})
export class SignInComponent implements OnInit {

    signInForm: FormGroup;

    constructor(private fb: FormBuilder){}

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

    login(){
        console.log(this.signInForm);
    }

}
