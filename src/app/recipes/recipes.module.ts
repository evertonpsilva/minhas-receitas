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

import { ConfirmDeleteModule } from '../shared/components/confirm-delete/confirm-delete.module';
import { RecipesComponent } from './recipes.component';
import { RecipesService } from './recipes.service';
import { DefaultFilterModule } from '../shared/components/default-filter/default-filter.module';
import { SearchInputModule } from '../shared/components/search-input/search-input.module';
import { CurrencyMaskModule } from 'ng2-currency-mask';


@NgModule({
  declarations: [
    RecipesComponent
  ],
  imports: [
    CommonModule,
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
  ],
  providers: [ 
    RecipesService 
  ]
})
export class RecipesModule { }
