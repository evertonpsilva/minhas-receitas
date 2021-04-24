import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './interceptors/request.interceptor';
import { UserService } from './user/user.service';
import { APIInterceptor } from './interceptors/api-prefix.interceptor';
import { IsSignedInguard } from './auth/is-signed-in.guard';
import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: APIInterceptor,
          multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true,
        },
        UserService,
        IsSignedInguard
    ]
})
export class CoreModule { }