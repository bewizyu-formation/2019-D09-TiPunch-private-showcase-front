import { Component, OnInit, Input } from '@angular/core';
import { Artist } from 'src/app/models/artist.model';
import { Router } from '@angular/router';
import { PATH_ARTIST } from 'src/app/app-routing.constantes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Artistes dans votre departement';

  artists: Array<Artist> = [new Artist('The weeknd','deded','tipunch@test','lyon',3, 'Starboy', '../../assets/startboy.jpg'),
                            new Artist('Kyo','kyo','kyo@test', 'paris' , 12, 'Derniere dance', '../../assets/Dans-La-Peau-Digipack.jpg'),
                            new Artist('Michael jackson', 'mj','mj@test','usa', 16, 'The king of pop','../../assets/michaeljackson.jpg')
                          ];

  constructor(private router: Router) { }

  ngOnInit() {
  }
goToArtist(event: Event){
  this.router.navigate([PATH_ARTIST, 'TOTO']);
}
}
