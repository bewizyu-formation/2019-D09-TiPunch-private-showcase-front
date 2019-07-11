import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { PATH_HOME } from 'src/app/app-routing.constantes';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  @Input()
  home:boolean = false;

  @Input()
  event:boolean = false;

  @Input()
  contact:boolean = false;

  open = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onClick(){
    this.open = !this.open;
  }

}
