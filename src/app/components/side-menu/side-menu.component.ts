import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { PATH_HOME, PATH_EVENT, PATH_CONTACT } from 'src/app/app-routing.constantes';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  location: string;

  open = false;

  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.location = this.route.routeConfig.path;
  }

  onClick(){
    this.open = !this.open;
  }

  isHome(){
    return this.location.includes(PATH_HOME);
  }

  isEvent(){
    return this.location.includes(PATH_EVENT);
  }

  isContact(){
    return this.location.includes(PATH_CONTACT);
  }

  goToHome(){
    this.router.navigate([PATH_HOME]);
  }

  goToEvents(){
    this.router.navigate([PATH_EVENT]);
  }

  goToContacts(){
    this.router.navigate([PATH_CONTACT]);
  }

}
