import { Injectable } from '@angular/core';
import { ArtistRepository } from './loadArtist.repository';
import { ArtistHome } from '../models/artistHome.model';
import { ArtistDetail } from '../models/artistDetail.model';



@Injectable({
    providedIn: 'root'
})
export class ArtistService {

    artistsHome: Array<ArtistHome>;
    artistsDetail: Array<ArtistDetail>;

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
    getDetailArtist(artistName): Promise<Array<ArtistDetail>> {
        return new Promise((resolve, reject) => {
            this.artistRepository
                .getArtistDetail(artistName)
                .subscribe((response) => {
                    this.artistsDetail = response.map(item =>
                        new ArtistDetail(
                            item.photo,
                            item.artist.name,
                            item.artist.description,
                            item.longDescription,
                            item.site,
                            item.phoneNumber,
                            item.email,
                            item.nbVotes,
                            item.totalVotes / item.nbVotes,
                            item.departments));
                    console.log(this.artistsDetail);
                    resolve(this.artistsDetail);
                }, () => {
                    reject('erreur');
                });
        });
    }


}

