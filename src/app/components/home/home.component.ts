import { Component, OnInit, Input } from '@angular/core';
import { ArtistService } from 'src/app/load.artist/loadArtist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Artistes dans votre departement';

  isNotLoaded = true;
  departement = "";


  constructor(public artistService: ArtistService) { }

  loader() {
    
  }

  ngOnInit() {
    this.artistService.getArtists(this.departement)

    while (this.artistService.artistsDetail.length==0) {
      this.isNotLoaded =true;
    }
    this.isNotLoaded=false;
  }

}
