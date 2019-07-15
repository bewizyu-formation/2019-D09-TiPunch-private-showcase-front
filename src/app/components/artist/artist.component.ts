import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ArtistDetail } from 'src/app/models/artistDetail.model';
<<<<<<< HEAD
import { ArtistService } from 'src/app/load.artist/loadArtist.service';
import _ from 'lodash';
=======
>>>>>>> 84aa4416a66bb2dda05c206ce2588e6d9635e49a



@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  title = 'Fiche Artiste';
  // artist: ArtistDetail=null;

  artist = new ArtistDetail('/src/assets/startboy.jpg',
    'the weeknd',
    'Curabitur lobortis id lorem id bibendum. Ut id consectetur magna.',
    'Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at. ' +
    'Vestibulum nec erat ut mi sollicitudin porttitor id sit amet risus. Nam tempus vel odio vitae aliquam. In imperdiet erosid lacus ' +
    'vestibulum vestibulum. Suspendisse fermentum sem sagittis ante venenatis egestas quis vel justo. Maecenas semper suscipit nunc, ' +
    'sed aliquam sapien convallis eu. Nulla ut turpis in diam dapibus consequat. Curabitur lobortisid lorem id bibendum. Ut id ' +
    'consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at. Vestibulum nec erat ut mi sollicitudin ' +
    'porttitor id sit amet risus. Nam tempus vel odio vitae aliquam. In imperdiet erosid lacus vestibulum vestibulum. ' +
    'Suspendisse fermentum sem sagittis ante venenatis egestas quis vel justo. Maecenas semper suscipit nunc, sed aliquam ' +
    'sapien convallis eu. Nulla ut turpis in diam dapibus consequat.',
    'https://mon-site-web.com',
    '303-732-7953',
    'North Amos',
    20, 4,
    ['Auvergne Rhône-Alpes', 'Savoie', 'Haute Savoie']);

  constructor(private route: ActivatedRoute, public artistService: ArtistService) { }

  getArtistDetail(artistName) {
    this.artistService.getDetailArtist(artistName)
      .then(data => {
        this.artist = data;
        this.artist.photo = '../../assets/startboy.jpg';
        if (_.isNaN(this.artist.moyVotes)) { this.artist.moyVotes = 0; }
      }).catch(function (e) {
        console.log(e);
      });
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.getArtistDetail(params.get('nameArtist'));
    });
  }
}
