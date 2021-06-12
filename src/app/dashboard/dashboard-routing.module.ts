import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/auth/auth.guard';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { RecipeComponent } from './recipes/recipe/recipe.component';
import { RecipeResolver } from './recipes/recipe/recipe.resolver';
import { RecipesComponent } from './recipes/recipes.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: HomeComponent,
            },
            {
                path: 'recipes',
                component: RecipesComponent,
                pathMatch: 'full',
            },
            {
                path: 'recipes/new',
                component: RecipeComponent,
            },
            {
                path: 'recipes/:id',
                component: RecipeComponent,
                resolve: { recipe: RecipeResolver }
            },
            {
                path: 'ingredients',
                component: IngredientsComponent,
            }, 
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
