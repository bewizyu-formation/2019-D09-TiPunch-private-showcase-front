import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MainWithoutBannerComponent} from './main-without-banner.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('MainWithoutBannerComponent', () => {
  let component: MainWithoutBannerComponent;
  let fixture: ComponentFixture<MainWithoutBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainWithoutBannerComponent
      ],
      imports: [
        RouterTestingModule
      ]
    }).compileComponents()
      .catch((e) => console.error(e));
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainWithoutBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
