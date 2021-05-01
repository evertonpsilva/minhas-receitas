import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { ConfirmDeleteComponent } from "./confirm-delete.component";

@NgModule({
    declarations: [ConfirmDeleteComponent],
    imports: [
        MatDialogModule,
        MatButtonModule,
    ]
})
export class ConfirmDeleteModule{

}