import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/artist';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  title = 'Artistes dans votre département';

  artists: Array<Artist> = [new Artist(1, 'The weeknd', "Starboy", 32, "../../assets/startboy.jpg"),
                            new Artist(2, 'Kyo', "Derniere dance", 26, "../../assets/Dans-La-Peau-Digipack.jpg"),
                            new Artist(3, 'Michael jackson', "The king of pop", 1006, "../../assets/michaeljackson.jpg"),
                            new Artist(4, 'Eminem', "Kamikaze", 1006, "../../assets/eminem-kamikaze.jpg"),
                            new Artist(5, 'Travis Scott', "Astroworld", 1006, "../../assets/tavisScott.jpg"),
                            new Artist(6, 'Daft Punk', "One more time", 1006, "../../assets/daftPunk.jpg")
                          ];
  constructor() { }

  ngOnInit() {
  }

}
