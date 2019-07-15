import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderReturnButtonComponent } from './header-return-button.component';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';

describe('HeaderReturnButtonComponent', () => {
  let component: HeaderReturnButtonComponent;
  let fixture: ComponentFixture<HeaderReturnButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderReturnButtonComponent],
      imports: [
        MatButtonModule,
        MatIconModule,
        RouterTestingModule
      ],
      providers: [
        {
          provide: ActivatedRoute, useValue: { routeConfig: { path: '' } }
        }
      ]
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
