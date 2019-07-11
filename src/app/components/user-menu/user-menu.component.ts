import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PATH_PROFIL, PATH_ARTIST, PATH_HOME, PATH_WELCOME } from 'src/app/app-routing.constantes';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  artistName: string;

  constructor(private route: Router) { }

  ngOnInit() {
  }

  // A compléter : Remplacer les données mockées
  goToArtistProfil(){
    // Récupération du nom de l'artiste connecté 
    this.artistName = 'TOTO';
    // Redirection
    this.route.navigate([PATH_ARTIST, this.artistName]);
  }

  goToProfilUser(){
    this.route.navigate([PATH_PROFIL]);
  }

  // A METTRE EN PLACE
  logout(){
    // Faire la déconnection de l'utilisateur courant
    // redirection vers home
    this.route.navigate([PATH_WELCOME]);
  }

}
