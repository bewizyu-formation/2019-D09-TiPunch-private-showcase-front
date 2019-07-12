import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/artist';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  title = 'Artistes dans votre département';
  artists: Array<Artist> = [new Artist(1, 'The weeknd', 'Starboy', 20, '../../assets/startboy.jpg'),
                            new Artist(2, 'Kyo', 'Derniere dance', 12, '../../assets/Dans-La-Peau-Digipack.jpg'),
                            new Artist(3, 'Michael jackson', 'The king of pop', 16, '../../assets/michaeljackson.jpg'),
                            new Artist(4, 'Eminem', 'Kamikaze', 18, '../../assets/eminem-kamikaze.jpg'),
                            new Artist(5, 'Travis Scott', 'Astroworld', 16, '../../assets/tavisScott.jpg'),
                            new Artist(6, 'Daft Punk', 'One more time', 17, '../../assets/daftPunk.jpg')
                          ];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToArtist() {
    this.router.navigate([]);
  }


}
