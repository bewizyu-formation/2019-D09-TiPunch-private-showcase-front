import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  open = false;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.open = !this.open;
  }

}
