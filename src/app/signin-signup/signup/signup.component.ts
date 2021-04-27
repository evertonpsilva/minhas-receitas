import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { debounceTime, first, map, switchMap, tap } from "rxjs/operators";
import { UserService } from "src/app/core/user/user.service";
import { MustMatch } from "src/app/shared/validators/match-controls.validator";
import { UserCreatedComponent } from "./user-created/user-created.component";

@Component({
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignUpComponent implements OnInit{

    signUpForm: FormGroup;
    visiblePassword: boolean = false;

    constructor(
        private fb: FormBuilder, 
        private userService: UserService, 
        private dialog: MatDialog,
        private router: Router
    ){

    }

    ngOnInit(){
        this.buildForm();
    }

    buildForm(): void{
        this.signUpForm = this.fb.group({
            email: ['', [Validators.required, Validators.email], this.checkIfEmailExists()],
            firstName: ['', [Validators.required, Validators.minLength(2)]],
            lastName: ['', [Validators.required, Validators.minLength(2)]],
            password: ['', [Validators.required, Validators.minLength(2)]],
            confirmPassword: ['', [Validators.required, Validators.minLength(2)]],
        }, { validator: MustMatch('password', 'confirmPassword') })
    }

    signUp(){
        const { email, firstName, lastName, password } = this.signUpForm.value;
        this.userService.create(email, firstName, lastName, password).subscribe(() => {
            this.dialog.open(UserCreatedComponent).afterClosed().subscribe(() => {
                this.router.navigate(['login']);
            });
        });
    }

    toggleVisibilityPassword(){
        this.visiblePassword = !this.visiblePassword;
    }

    getFormControl(nameControl: string): AbstractControl{
        return this.signUpForm.get(nameControl);
    }

    getErrorEmail() {
        if (this.getFormControl('email').hasError('required')) {
          return 'You must enter a value';
        }else if(this.getFormControl('email').hasError('emailExists')){
            return 'E-mail already registered';
        }
    
        return this.getFormControl('email').hasError('email') ? 'Not a valid email' : '';
    }

    getErrorNames(formControlName: string) {
        if (this.getFormControl(formControlName).hasError('required')) {
          return 'You must enter a value';
        }else if(this.getFormControl(formControlName).hasError('required')){}
    
        return null;
    }

    getErrorPassword() {
        if(this.getFormControl('password').hasError('required')){
            return 'You must enter a value';
        }
        return null;
    }

    getConfirmPasswordError(){
        if(this.getFormControl('confirmPassword').hasError('mustMatch')){
            return 'Passwords not match';
        }else{
            return this.getErrorPassword();
        }
    }

    checkIfEmailExists() {

        return (control: AbstractControl) => {
            return control
                .valueChanges
                .pipe(debounceTime(300))
                .pipe(switchMap(email => 
                        this.userService.checkIfEmailExists(email)
                ))
                .pipe(map(isTaken => isTaken ? { emailExists: true } : null))
                .pipe(first());
        }
    }

    comparePasswords(form: FormGroup){
        const { password, confirmPassword } = form.value;
        return password === confirmPassword ? null : { passwordsNotMatch: true }
    }

    get diableButton(){
        return !!this.signUpForm.invalid;
    }

}