import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PATH_LOGIN, PATH_SIGNUP } from 'src/app/app-routing.constantes';

@Component({
  selector: 'app-header-sign',
  templateUrl: './header-sign.component.html',
  styleUrls: ['./header-sign.component.css']
})
export class HeaderSignComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goToLogin(){
    this.router.navigate([PATH_LOGIN]);
  }

  goToSignUp(){
    this.router.navigate([PATH_SIGNUP]);

  }

}
