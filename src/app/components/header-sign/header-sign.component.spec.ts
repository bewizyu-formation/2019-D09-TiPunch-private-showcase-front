import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSignComponent } from './header-sign.component';

describe('HeaderSignComponent', () => {
  let component: HeaderSignComponent;
  let fixture: ComponentFixture<HeaderSignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
