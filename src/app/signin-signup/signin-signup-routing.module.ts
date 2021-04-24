
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/auth/auth.guard';
import { IsSignedInguard } from '../core/auth/is-signed-in.guard';
import { SignInSignUpComponent } from './signin-signup.component';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';

const routes: Routes = [
    {
        path: '',
        component: SignInSignUpComponent,
        canActivate: [IsSignedInguard],
        children: [
            { 
                path: '',
                component: SignInComponent,
                data: {animation: 'SignIn'}
            }, 
            { 
                path: 'register',
                component: SignUpComponent,
                data: {animation: 'SignUp'}
            },  
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class SignInSignUpRoutingModule { }
  