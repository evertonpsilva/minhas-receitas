import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PageNotFoundComponent } from './shared/components/404/page-not-found.component';

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
    path: 'dashboard',
    loadChildren: () => DashboardModule
  },
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
