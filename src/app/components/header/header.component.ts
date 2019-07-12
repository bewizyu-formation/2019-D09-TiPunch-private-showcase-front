import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  PATH_EVENT,
  PATH_SIGNUP,
  PATH_LOGIN,
  PATH_HOME,
  PATH_CONTACT,
  PATH_PROFIL,
  PATH_ARTIST,
  PATH_WELCOME
} from 'src/app/app-routing.constantes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  location: string;

  @Input()
  title = 'Private ShowCase';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.location = this.route.routeConfig.path;
  }

  isEvent(): boolean {
    return this.location === PATH_EVENT;
  }

  isWelcome(): boolean {
    return this.location === PATH_WELCOME;
  }

  isSignUp(): boolean {
    return this.location === PATH_SIGNUP;
  }

  isLogin(): boolean {
    return this.location === PATH_LOGIN;
  }

  isHome(): boolean {
    return this.location === PATH_HOME;
  }

  isContact(): boolean {
    return this.location === PATH_CONTACT;
  }

  isProfil(): boolean {
    return this.location === PATH_PROFIL;
  }

  isArtistDetail(): boolean {
    return this.location.includes(PATH_ARTIST + '/');
  }
}
