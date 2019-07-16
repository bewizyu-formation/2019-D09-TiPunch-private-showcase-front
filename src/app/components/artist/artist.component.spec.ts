import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistComponent } from './artist.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule, MatListModule, MatIconModule } from '@angular/material';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { PARAMETERS } from '@angular/core/src/util/decorators';

describe('ArtistComponent', () => {
  let component: ArtistComponent;
  let fixture: ComponentFixture<ArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArtistComponent],
      imports: [
        HttpClientModule,
        MatCardModule,
        MatListModule,
        MatIconModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: {
              subscribe: (
                (params: ParamMap) => ({ params: { nameArtist: 'TOTO' } })
              )
            }
          }
        }
      ]
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
