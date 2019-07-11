import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistComponent } from './artist.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ArtistComponent', () => {
  let component: ArtistComponent;
  let fixture: ComponentFixture<ArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
