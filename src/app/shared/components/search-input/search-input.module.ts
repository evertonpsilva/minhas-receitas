import { NgModule } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";

import { SearchInputComponent } from './search-input.component';

@NgModule({
    declarations: [
        SearchInputComponent,
    ],
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatIconModule
    ],
    exports: [
        SearchInputComponent
    ]
})
export class SearchInputModule{

}