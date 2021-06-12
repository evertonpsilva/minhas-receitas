import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SignInSignUpModule } from './signin-signup/signin-signup.module';
import { HttpMessageComponent } from './shared/components/http-message/http-message.component';
import { HttpMessageModule } from './shared/components/http-message/http-message.module';
import { PageNotFoundModule } from './shared/components/404/page-not-found.module';
import { ConfirmDeleteModule } from './shared/components/confirm-delete/confirm-delete.module';
import { DefaultFilterModule } from './shared/components/default-filter/default-filter.module';
import { DashboardModule } from './dashboard/dashboard.module';

registerLocaleData(localePt, 'pt-BR');
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    PageNotFoundModule,
    SignInSignUpModule,
    BrowserAnimationsModule,
    HttpMessageModule,
    ConfirmDeleteModule,
    DefaultFilterModule,
    DashboardModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    },
    {
      provide: DEFAULT_CURRENCY_CODE, 
      useValue: 'BRL'
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    HttpMessageComponent
  ]
})
export class AppModule { }
