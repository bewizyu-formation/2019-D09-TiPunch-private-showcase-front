import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { APP_CONFIG } from './app.config';
import { TokenInterceptorService } from './services/interceptors/token-interceptor.service';
import { ErrorInterceptorService } from './services/interceptors/error-interceptor.service';
import { CommonHeadersInterceptorService } from './services/interceptors/common-headers-interceptor.service';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule, MatListModule, MatIconModule } from '@angular/material';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ROUTES } from './app-routing.module';
import { HeaderSignComponent } from './components/header-sign/header-sign.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderReturnButtonComponent } from './components/header-return-button/header-return-button.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { EventComponent } from './components/event/event.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProfilComponent } from './components/profil/profil.component';
import { ArtistComponent } from './components/artist/artist.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HeaderComponent,
    HeaderSignComponent,
    BannerComponent,
    HomeComponent,
    HeaderReturnButtonComponent,
    WelcomeComponent,
    SideMenuComponent,
    UserMenuComponent,
    EventComponent,
    ContactComponent,
    ProfilComponent,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    { provide: APP_CONFIG, useValue: environment },
    { provide: HTTP_INTERCEPTORS, useClass: CommonHeadersInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true },
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
