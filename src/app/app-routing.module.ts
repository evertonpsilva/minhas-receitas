import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
      path: '',
      pathMatch: 'full',
      redirectTo: 'login',
  },
  {
    path: 'login',
    loadChildren: './signin-signup/signin-signup.module#SignInSignUpModule'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
