import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWithoutBannerComponent } from './main-without-banner.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('MainWithoutBannerComponent', () => {
  let component: MainWithoutBannerComponent;
  let fixture: ComponentFixture<MainWithoutBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainWithoutBannerComponent ],
      imports: [
        AppRoutingModule
      ]
    })
    .compileComponents();
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
