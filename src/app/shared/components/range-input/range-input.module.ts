import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatSliderModule } from "@angular/material/slider";
import { RangeInputComponent } from "./range-input.component";

@NgModule({
    declarations: [
        RangeInputComponent,
    ],
    exports: [
        RangeInputComponent
    ],
    imports: [
        CommonModule,
        MatSliderModule,
    ]
})
export class RangeInputModule{

}