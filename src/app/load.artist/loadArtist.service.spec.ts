import { TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { APP_CONFIG } from '../app.config';
import { environment } from '../../environments/environment';
import { ArtistService } from './loadArtist.service';



describe('ArtistService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
    ],
    providers: [
      { provide: APP_CONFIG, useValue: environment },
    ]
  }));

  it('should be created', () => {
    const service: ArtistService = TestBed.get(ArtistService);
    expect(service).toBeTruthy();
  });
});
