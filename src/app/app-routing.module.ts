import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { RecipesComponent } from './recipes/recipes.component';
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
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'ingredients',
    component: IngredientsComponent,
    canActivate: [AuthGuard],
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
