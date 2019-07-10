import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeComponent } from './welcome.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatButtonModule, MatFormFieldModule, MatCheckboxModule, MatInputModule, MatAutocompleteModule, MatButtonToggleModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from '../header/header.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeComponent ],
      imports: [MatButtonModule,
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
        RouterTestingModule],
        
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
