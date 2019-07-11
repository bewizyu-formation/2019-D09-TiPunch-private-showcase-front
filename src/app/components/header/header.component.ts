import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PATH_HOME } from 'src/app/app-routing.constantes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  title: string = "Private ShowCase";

  @Input()
  right: boolean = false;

  @Input()
  returnButton: boolean = false;

  @Input()
  sideMenu: boolean = false;

  @Input()
  home:boolean = false;

  constructor() { }

  ngOnInit() {
  }
}
