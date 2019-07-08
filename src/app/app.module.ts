import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {environment} from '../environments/environment';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {APP_CONFIG} from './app.config';
import {TokenInterceptorService} from './services/interceptors/token-interceptor.service';
import {ErrorInterceptorService} from './services/interceptors/error-interceptor.service';
import {CommonHeadersInterceptorService} from './services/interceptors/common-headers-interceptor.service';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { HeaderComponent } from './components/header/header.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { MainWithBannerComponent } from './components/main-with-banner/main-with-banner.component';
import { MainWithoutBannerComponent } from './components/main-without-banner/main-without-banner.component';
import { HeaderSignComponent } from './components/header-sign/header-sign.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    MainWithBannerComponent,
    MainWithoutBannerComponent,
    HeaderSignComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    AppRoutingModule
  ],
  providers: [
    {provide: APP_CONFIG, useValue: environment},
    {provide : HTTP_INTERCEPTORS, useClass : CommonHeadersInterceptorService, multi: true},
    {provide : HTTP_INTERCEPTORS, useClass : TokenInterceptorService, multi: true},
    {provide : HTTP_INTERCEPTORS, useClass : ErrorInterceptorService, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
