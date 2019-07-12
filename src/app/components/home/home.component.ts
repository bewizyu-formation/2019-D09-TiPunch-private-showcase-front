import { Component, OnInit, Input } from '@angular/core';
import { ArtistService } from 'src/app/load.artist/loadArtist.service';
import { ArtistDetail } from 'src/app/models/artistDetail';
import { Artist } from 'src/app/models/Artist';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Artistes dans votre departement';

  isNotLoaded = true;
  departement = "";

  artistsDetail: Array<ArtistDetail> = [];


  constructor(public artistService: ArtistService) { }

  getArtistsDetail() {
    this.artistService.getArtists(this.departement)
    .then(data => {
      this.artistsDetail = data;
    });
  }

  ngOnInit() {
    //this.getArtistsDetail()

    setTimeout(function() { 
      const roles = ['ROLE_USER'];
      const artist = new Artist( "jjj","hhh","kgkj","hgkj","khghlkj","jhfgkji",roles);
      this.artistsDetail =[
        new ArtistDetail(artist,"photo", "site", 5, 654654, "description")
    ];
    console.log(this.artistsDetail) 
  }, 3000);

    /* while (this.artistsDetail.length=0) {
      this.isNotLoaded =true;
    } */
    /* setTimeout(function() { 
      if(this.artistsDetail.length!=0){
        this.isNotLoaded=false;
      }
  }, 4000) */
    
    
  }

}
