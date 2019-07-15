import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ArtistDetail } from 'src/app/models/artistDetail.model';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  title = 'Fiche Artiste';

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

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      console.log(params);
    });
  }
}
