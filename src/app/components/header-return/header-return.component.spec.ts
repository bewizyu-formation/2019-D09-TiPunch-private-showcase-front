import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderReturnComponent } from './header-return.component';

describe('HeaderReturnComponent', () => {
  let component: HeaderReturnComponent;
  let fixture: ComponentFixture<HeaderReturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderReturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
