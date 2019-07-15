import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { ArtistService } from 'src/app/load.artist/loadArtist.service';
import { ArtistDetail } from 'src/app/models/artistDetail';
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
  department = "Ain";

  artistsDetail: Array<ArtistDetail> = [];
  test: Array<string> = [];


  constructor(public artistService: ArtistService, private router: Router) { }

  getArtistsDetail() {
    this.artistService.getArtists(this.department)
      .then(data => {
        this.artistsDetail = data;
        
      this.isNotLoaded=false;
      }).catch(function (e) {
        console.log(e);
      })
  }
  artists: Array<ArtistHome> = [
    new ArtistHome('../../assets/startboy.jpg', 3, 3, 'The Weeknd', 'Starboy'),
    new ArtistHome('../../assets/Dans-La-Peau-Digipack.jpg', 5, 2, 'Kyo', 'Derniere dance'),
    new ArtistHome('../../assets/michaeljackson.jpg', 4, 3, 'Michael Jackson', 'The king of pop')
  ];


  ngOnInit() {
    
    this.getArtistsDetail()

    setTimeout(function () {
      this.test = ["test1"];
      console.log(this.test)
      this.isNotLoaded=false;
      console.log(this.isNotLoaded)
    }.bind(this), 5000);  
  }

  goToArtist(event: Event) {
    this.router.navigate([PATH_ARTIST, 'TOTO']);
  }
}
