import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArtistRepository } from './loadArtist.repository';
import { ArtistDetail } from '../models/artistDetail';



@Injectable({
    providedIn: 'root'
})
export class ArtistService {

    artistsDetail: Array<ArtistDetail>;

    constructor(private artistRepository: ArtistRepository, private http: HttpClient) {
    }

    /**
   * Get the cities name list
   * @param control input field
   */
    getArtists(departmentName: string): Promise<Array<ArtistDetail>> {
        return new Promise((resolve, reject) => {
            this.artistRepository
                .getArtists(departmentName)
                .subscribe((response) => {
                    this.artistsDetail = response.map(item => item.artist);
                    resolve(this.artistsDetail);
                }, () => {
                    reject('Erreur');
                });
        });
    }


}

