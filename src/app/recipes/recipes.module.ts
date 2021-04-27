import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes.component';
import { RecipesService } from './recipes.service';



@NgModule({
  declarations: [
    RecipesComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [ 
    RecipesService 
  ]
})
export class RecipesModule { }
