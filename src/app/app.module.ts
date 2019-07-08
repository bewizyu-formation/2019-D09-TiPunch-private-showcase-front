import {BrowserModule} from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {environment} from '../environments/environment';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {APP_CONFIG} from './app.config';
import {TokenInterceptorService} from './services/interceptors/token-interceptor.service';
import {ErrorInterceptorService} from './services/interceptors/error-interceptor.service';
import {CommonHeadersInterceptorService} from './services/interceptors/common-headers-interceptor.service';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete'; 
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { LoginComponent } from './components/login/login.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatFormFieldModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonToggleModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
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
