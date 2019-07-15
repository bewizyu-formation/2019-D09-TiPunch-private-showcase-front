import { TestBed } from '@angular/core/testing';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { EnvironmentService } from '../services/environment.service';
import { APP_CONFIG } from '../app.config';

import { ArtistRepository } from './loadArtist.repository';



describe('ArtistRepository', () => {
    beforeEach(() => {

        const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);

        TestBed.configureTestingModule({
            imports: [
                HttpClientModule
            ],
            providers: [
                { provide: APP_CONFIG, useValue: environment },
                EnvironmentService,
                { provide: HttpClient, useValue: httpClientSpy }
            ]
        });
    });

    it('should be created', () => {
        const service: ArtistRepository = TestBed.get(ArtistRepository);
        expect(service).toBeTruthy();
    });
});
