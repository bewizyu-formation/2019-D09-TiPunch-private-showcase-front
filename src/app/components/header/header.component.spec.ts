import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderComponent} from './header.component';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MatAutocompleteModule, MatButtonToggleModule, MatCheckboxModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {APP_CONFIG} from 'src/app/app.config';
import {environment} from 'src/environments/environment';
import {CommonHeadersInterceptorService} from 'src/app/services/interceptors/common-headers-interceptor.service';
import {TokenInterceptorService} from 'src/app/services/interceptors/token-interceptor.service';
import {ErrorInterceptorService} from 'src/app/services/interceptors/error-interceptor.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent
      ],
      imports: [
        RouterTestingModule,
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
        {provide: HTTP_INTERCEPTORS, useClass: CommonHeadersInterceptorService, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true},
      ]
    }).compileComponents()
      .catch((e) => console.error(e));
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
