import { Injectable } from '@angular/core';
import { ArtistRepository } from './loadArtist.repository';
import { ArtistDetail } from '../models/artistDetail';



@Injectable({
    providedIn: 'root'
})
export class ArtistService {

    artistsDetail: Array<ArtistDetail>;

    constructor(private artistRepository: ArtistRepository) {
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
                    console.log(response);
                    this.artistsDetail = response.map(item => new ArtistDetail(item.artist, item.photo, item.site, item.vote, item.phoneNumber, item.description));
                    console.log("subscribe work")
                    resolve(this.artistsDetail);
                }, () => {
                    reject('erreur');
                });
        });
    }


}

