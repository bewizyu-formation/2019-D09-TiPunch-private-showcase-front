import { TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { APP_CONFIG } from '../app.config';
import { environment } from '../../environments/environment';
import { CommuneService } from './commune.service';



describe('CommuneService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
    ],
    providers: [
      { provide: APP_CONFIG, useValue: environment },
    ]
  }));

  it('should be created', () => {
    const service: CommuneService = TestBed.get(CommuneService);
    expect(service).toBeTruthy();
  });
});
