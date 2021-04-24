import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignUpComponent implements OnInit{

    signUpForm: FormGroup;
    visiblePassword: boolean = false;

    constructor(private fb: FormBuilder){

    }

    ngOnInit(){
        this.buildForm();
    }

    buildForm(): void{
        this.signUpForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            firstName: ['', [Validators.required, Validators.minLength(2)]],
            lastName: ['', [Validators.required, Validators.minLength(2)]],
            password: ['', [Validators.required, Validators.minLength(2)]],
            confirmPassword: ['', [Validators.required, Validators.minLength(2)]],
        })
    }

    signUp(){
        console.log(this.signUpForm);
    }

    toggleVisibilityPassword(){
        this.visiblePassword = !this.visiblePassword;
    }

}