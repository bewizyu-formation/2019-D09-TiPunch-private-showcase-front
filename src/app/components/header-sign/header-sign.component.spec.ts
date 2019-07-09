import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderSignComponent} from './header-sign.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('HeaderSignComponent', () => {
  let component: HeaderSignComponent;
  let fixture: ComponentFixture<HeaderSignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderSignComponent
      ],
      imports: [
        RouterTestingModule
      ]
    }).compileComponents().catch((e) => console.error(e));
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
