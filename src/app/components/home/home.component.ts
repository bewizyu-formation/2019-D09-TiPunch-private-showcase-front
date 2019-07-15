import { Component, OnInit, Input } from '@angular/core';
import { ArtistHome } from 'src/app/models/artistHome.model';
import { Router } from '@angular/router';
import { PATH_ARTIST } from 'src/app/app-routing.constantes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Artistes dans votre departement';

  artists: Array<ArtistHome> = [
    new ArtistHome('../../assets/startboy.jpg', 3, 3, 'The Weeknd', 'Starboy'),
    new ArtistHome('../../assets/Dans-La-Peau-Digipack.jpg', 5, 2, 'Kyo', 'Derniere dance'),
    new ArtistHome('../../assets/michaeljackson.jpg', 5, 4, 'Michael Jackson', 'The king of pop')
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToArtist(artistName: string) {
    this.router.navigate([PATH_ARTIST, artistName]);
  }
}
