import { Injectable } from '@angular/core';
import { ArtistRepository } from './loadArtist.repository';
import { ArtistHome } from '../models/artistHome.model';
import { ArtistDetail } from '../models/artistDetail.model';


@Injectable({
    providedIn: 'root'
})
export class ArtistService {

    artistsHome: Array<ArtistHome>;
    artistDetail: ArtistDetail;

    constructor(private artistRepository: ArtistRepository) {
    }

    /**
   * Get the artists list by location
   */
    getHomeArtists(latitude, longitude): Promise<Array<ArtistHome>> {
        return new Promise((resolve, reject) => {
            this.artistRepository
                .getArtists(latitude, longitude)
                .subscribe((response) => {
                    this.artistsHome = response.map(item =>
                        new ArtistHome(
                            item.photo,
                            item.nbVotes,
                            item.totalVotes / item.nbVotes,
                            item.artist.name,
                            item.artist.description));
                    console.log(this.artistsHome);
                    resolve(this.artistsHome);
                }, () => {
                    reject('erreur');
                });
        });
    }

    /**
   * Get artist details
   */
    getDetailArtist(artistName): Promise<ArtistDetail> {
        return new Promise((resolve, reject) => {
            this.artistRepository
                .getArtistDetail(artistName)
                .subscribe((response) => {
                    this.artistDetail = new ArtistDetail(
                        response.photo,
                        response.artist.name,
                        response.artist.description,
                        response.longDescription,
                        response.site,
                        response.phoneNumber,
                        response.artist.city,
                        response.nbVotes,
                        response.totalVotes / response.nbVotes,
                        response.departments);
                    console.log(this.artistDetail);
                    resolve(this.artistDetail);
                }, () => {
                    reject('erreur');
                });
        });
    }


}

