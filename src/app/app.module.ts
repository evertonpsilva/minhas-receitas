import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SignInSignUpModule } from './signin-signup/signin-signup.module';
import { HomeModule } from './home/home.module';
import { HttpMessageComponent } from './shared/components/http-message/http-message.component';
import { HttpMessageModule } from './shared/components/http-message/http-message.module';
import { NavBarModule } from './shared/components/navbar/navbar.module';
import { PageNotFoundModule } from './shared/components/404/page-not-found.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { ConfirmDeleteModule } from './shared/components/confirm-delete/confirm-delete.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    PageNotFoundModule,
    NavBarModule,
    SignInSignUpModule,
    BrowserAnimationsModule,
    HomeModule,
    IngredientsModule,
    HttpMessageModule,
    ConfirmDeleteModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    HttpMessageComponent
  ]
})
export class AppModule { }
