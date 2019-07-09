import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatFormFieldModule, MatCheckboxModule, MatInputModule, MatAutocompleteModule, MatButtonToggleModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';
import { APP_CONFIG } from 'src/app/app.config';
import { environment } from 'src/environments/environment';
import { CommonHeadersInterceptorService } from 'src/app/services/interceptors/common-headers-interceptor.service';
import { TokenInterceptorService } from 'src/app/services/interceptors/token-interceptor.service';
import { ErrorInterceptorService } from 'src/app/services/interceptors/error-interceptor.service';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
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
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {provide: APP_CONFIG, useValue: environment},
        {provide : HTTP_INTERCEPTORS, useClass : CommonHeadersInterceptorService, multi: true},
        {provide : HTTP_INTERCEPTORS, useClass : TokenInterceptorService, multi: true},
        {provide : HTTP_INTERCEPTORS, useClass : ErrorInterceptorService, multi: true},]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
