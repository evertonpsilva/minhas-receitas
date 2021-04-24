import { HttpErrorResponse, HttpResponse, HttpResponseBase } from "@angular/common/http";
import { Component, Inject, OnInit } from "@angular/core";
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
    selector: 'app-http-message',
    templateUrl: './http-message.component.html',
    styleUrls: ['./http-message.component.scss']
})
export class HttpMessageComponent{

    title: string = '';
    message: string = '';
    icon: string = '';


    constructor(@Inject(MAT_DIALOG_DATA) public httpResponse: HttpResponseBase) { 
        if(httpResponse instanceof HttpErrorResponse){
            const httpError = httpResponse as HttpErrorResponse;

            this.title = httpError.error.error;
            this.message = httpError.error.message;
            this.icon = 'warning';
        }else{

            this.title = "Sucess";
            this.icon = 'check_circle';
        }
    }

}