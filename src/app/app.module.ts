import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

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
import {HeaderComponent} from './components/header/header.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {MainWithBannerComponent} from './components/main-with-banner/main-with-banner.component';
import {MainWithoutBannerComponent} from './components/main-without-banner/main-without-banner.component';
import {HeaderSignComponent} from './components/header-sign/header-sign.component';
import {SignupComponent} from './components/signup/signup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {RouterModule, Routes} from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: HeaderComponent,
        outlet: 'header',
        children: [
          {
            path: '',
            component: HeaderSignComponent
          }
        ],
        data: {title: 'Private Showcase'}
      },
      {
        path: '',
        component: MainWithBannerComponent,
        children: [
          {
            path: '',
            component: WelcomeComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HeaderComponent,
    WelcomeComponent,
    MainWithBannerComponent,
    MainWithoutBannerComponent,
    HeaderSignComponent
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
    MatButtonToggleModule,
    MatButtonModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    {provide: APP_CONFIG, useValue: environment},
    {provide: HTTP_INTERCEPTORS, useClass: CommonHeadersInterceptorService, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true},
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
