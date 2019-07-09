import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWithBannerComponent } from './main-with-banner.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('MainWithBannerComponent', () => {
  let component: MainWithBannerComponent;
  let fixture: ComponentFixture<MainWithBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainWithBannerComponent],
      imports: [
        AppRoutingModule
      ]
    })
      .compileComponents();
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
