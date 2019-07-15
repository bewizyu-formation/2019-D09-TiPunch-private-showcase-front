import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { ArtistService } from 'src/app/load.artist/loadArtist.service';
import { ArtistHome } from 'src/app/models/artistHome.model';
import { Router } from '@angular/router';
import { PATH_ARTIST } from 'src/app/app-routing.constantes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  title = 'Artistes dans votre departement';

  isNotLoaded = true;
  artists: Array<ArtistHome> = [];

  constructor(public artistService: ArtistService, private router: Router) { }

  getArtistsDetail(latitude, longitude) {
    this.artistService.getHomeArtists(latitude, longitude)
      .then(data => {
        this.artists = data;
        this.artists[0].photo = '../../assets/startboy.jpg';
        this.isNotLoaded = false;
      }).catch(function (e) {
        console.log(e);
      });
  }
  /* artists: Array<ArtistHome> = [
    new ArtistHome('../../assets/startboy.jpg', 3, 3, 'The Weeknd', 'Starboy'),
    new ArtistHome('../../assets/Dans-La-Peau-Digipack.jpg', 5, 2, 'Kyo', 'Derniere dance'),
    new ArtistHome('../../assets/michaeljackson.jpg', 4, 3, 'Michael Jackson', 'The king of pop')
  ]; */

  ngOnInit() {
    setTimeout(function () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          this.getArtistsDetail(position.coords.latitude, position.coords.longitude);
        }, () => {
          this.getArtistsDetail(-100, -200);
        });
      } else {
        this.getArtistsDetail(-100, -200);
      }
      this.isNotLoaded = false;
    }.bind(this), 3000);
  }

  goToArtist(artistName: string) {
    this.router.navigate([PATH_ARTIST, artistName]);
  }
}
