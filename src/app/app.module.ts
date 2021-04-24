import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SignInSignUpModule } from './signin-signup/signin-signup.module';
import { HomeModule } from './home/home.module';
import { HttpMessageComponent } from './shared/components/http-message/http-message.component';
import { HttpMessageModule } from './shared/components/http-message/http-message.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SignInSignUpModule,
    BrowserAnimationsModule,
    HomeModule,
    HttpMessageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    HttpMessageComponent
  ]
})
export class AppModule { }
