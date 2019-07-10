import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderReturnButtonComponent } from './header-return-button.component';

describe('HeaderReturnButtonComponent', () => {
  let component: HeaderReturnButtonComponent;
  let fixture: ComponentFixture<HeaderReturnButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderReturnButtonComponent ]
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
