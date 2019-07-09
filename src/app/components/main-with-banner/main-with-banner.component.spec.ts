import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MainWithBannerComponent} from './main-with-banner.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('MainWithBannerComponent', () => {
  let component: MainWithBannerComponent;
  let fixture: ComponentFixture<MainWithBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainWithBannerComponent
      ],
      imports: [
        RouterTestingModule
      ]
    }).compileComponents()
      .catch((e) => console.error(e));
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainWithBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
