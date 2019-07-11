import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PATH_WELCOME } from 'src/app/app-routing.constantes';

@Component({
  selector: 'app-header-return-button',
  templateUrl: './header-return-button.component.html',
  styleUrls: ['./header-return-button.component.css']
})
export class HeaderReturnButtonComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  return() {
    this.route.navigate([PATH_WELCOME]);
  }

}
