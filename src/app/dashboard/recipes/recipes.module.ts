import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ConfirmDeleteModule } from '../../shared/components/confirm-delete/confirm-delete.module';
import { RecipesComponent } from './recipes.component';
import { RecipesService } from './recipes.service';
import { DefaultFilterModule } from '../../shared/components/default-filter/default-filter.module';
import { SearchInputModule } from '../../shared/components/search-input/search-input.module';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeResolver } from './recipe/recipe.resolver';
import { SucessDialogModule } from '../../shared/components/sucess-dialog/sucess-dialog.module';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    ConfirmDeleteModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    CurrencyMaskModule,
    SearchInputModule,
    DefaultFilterModule,
    MatAutocompleteModule,
    RouterModule,
    MatListModule,
    MatCheckboxModule,
    SucessDialogModule,
    MatTooltipModule,
  ],
  providers: [ 
    RecipesService,
    RecipeResolver
  ],
})
export class RecipesModule { }
