import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { HttpMessageService } from "src/app/shared/components/http-message/http-message.service";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor{

    constructor(private httpMessageService: HttpMessageService){ }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    this.httpMessageService.setHttpResponseState(error);
                    return throwError(error.message);
                })
            );
    }

}