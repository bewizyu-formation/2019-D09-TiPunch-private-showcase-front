import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatFormFieldModule, MatCheckboxModule, MatInputModule, MatAutocompleteModule, MatButtonToggleModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { APP_CONFIG } from 'src/app/app.config';
import { environment } from 'src/environments/environment';
import { TokenInterceptorService } from 'src/app/services/interceptors/token-interceptor.service';
import { CommonHeadersInterceptorService } from 'src/app/services/interceptors/common-headers-interceptor.service';
import { ErrorInterceptorService } from 'src/app/services/interceptors/error-interceptor.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
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
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [
        { provide: APP_CONFIG, useValue: environment },
        { provide: HTTP_INTERCEPTORS, useClass: CommonHeadersInterceptorService, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
