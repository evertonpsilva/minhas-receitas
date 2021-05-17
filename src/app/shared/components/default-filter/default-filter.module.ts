import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from "@angular/material/select";

import { CurrencyMaskModule } from "ng2-currency-mask";
import { DefaultFilterComponent } from "./default-filter.component";
import { DefaultFilterService } from "./default-filter.service";
import { FilterButtonComponent } from "./filter-button/filter-button.component";
import { FilterFormComponent } from "./filter-form/filter-form.component";
import { RangeInputModule } from "../range-input/range-input.module";

@NgModule({
    declarations: [
        DefaultFilterComponent,
        FilterButtonComponent,
        FilterFormComponent
    ],
    providers: [
        DefaultFilterService
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        CurrencyMaskModule,
        MatRadioModule,
        MatSelectModule,
        MatSliderModule,
        RangeInputModule,
    ],
    exports: [
        DefaultFilterComponent,
        FilterButtonComponent,
    ]
})
export class DefaultFilterModule{ }