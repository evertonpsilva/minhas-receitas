import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";

import { CurrencyMaskModule } from "ng2-currency-mask";
import { ConfirmDeleteComponent } from "../shared/components/confirm-delete/confirm-delete.component";
import { ConfirmDeleteModule } from "../shared/components/confirm-delete/confirm-delete.module";
import { DefaultFilterModule } from "../shared/components/default-filter/default-filter.module";
import { SearchInputModule } from "../shared/components/search-input/search-input.module";
import { AddIngredientComponent } from "./add-ingredient/add-ingredient.component";
import { IngredientsComponent } from "./ingredients.component";
import { IngredientsService } from "./ingredients.service";


@NgModule({
    declarations: [
        IngredientsComponent,
        AddIngredientComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
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
        IngredientsService,
    ],
    entryComponents: [
        ConfirmDeleteComponent,
        AddIngredientComponent
    ]
})
export class IngredientsModule{

}