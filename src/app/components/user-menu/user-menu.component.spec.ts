import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMenuComponent } from './user-menu.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatButtonToggleModule, MatButtonModule, MatMenuModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { LoggedInGuard } from 'src/app/services/guards/logged-in-guard.guard';
import { UserService } from 'src/app/user/user.service';

describe('UserMenuComponent', () => {
  let component: UserMenuComponent;
  let fixture: ComponentFixture<UserMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserMenuComponent],
      imports: [
        MatButtonToggleModule,
        MatButtonModule,
        MatMenuModule,
        RouterTestingModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [LoggedInGuard,
        {
          provide: UserService,
          useValue: {
            token: 'Token'
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
