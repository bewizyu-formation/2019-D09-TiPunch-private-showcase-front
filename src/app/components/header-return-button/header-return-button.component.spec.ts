import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderReturnButtonComponent } from './header-return-button.component';
import { MatButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { ROUTES } from 'src/app/app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderReturnButtonComponent', () => {
  let component: HeaderReturnButtonComponent;
  let fixture: ComponentFixture<HeaderReturnButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderReturnButtonComponent ],
      imports: [
        MatButtonModule,
        RouterTestingModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderReturnButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
