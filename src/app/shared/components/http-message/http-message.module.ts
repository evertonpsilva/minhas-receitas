import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpMessageComponent } from './http-message.component';
import { HttpMessageService } from './http-message.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    HttpMessageComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule
  ],
  providers: [
    HttpMessageService
  ]
})
export class HttpMessageModule { }
