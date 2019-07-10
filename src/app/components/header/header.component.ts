import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor() { }

  ngOnInit() {

  }
}
