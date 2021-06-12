import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SucessDialogComponent } from './sucess-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    SucessDialogComponent
  ],
  entryComponents: [
    SucessDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
  ]
})
export class SucessDialogModule { }
