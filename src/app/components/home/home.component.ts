import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { ArtistService } from 'src/app/load.artist/loadArtist.service';
import { ArtistDetail } from 'src/app/models/artistDetail';
import { Artist } from 'src/app/models/Artist';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';

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


  constructor(public artistService: ArtistService, private cdRef:ChangeDetectorRef) { }

  getArtistsDetail() {
    this.artistService.getArtists(this.department)
      .then(data => {
        this.artistsDetail = data;
        
      this.isNotLoaded=false;
      }).catch(function (e) {
        console.log(e);
      })
  }

  ngOnInit() {
    
    this.getArtistsDetail()

    setTimeout(function () {
      this.test = ["test1"];
      console.log(this.test)
      this.isNotLoaded=false;
      console.log(this.isNotLoaded)
    }.bind(this), 5000);  
  }

}
