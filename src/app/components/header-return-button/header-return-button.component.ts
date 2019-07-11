import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PATH_WELCOME, PATH_SIGNUP, PATH_LOGIN, PATH_HOME } from 'src/app/app-routing.constantes';

@Component({
  selector: 'app-header-return-button',
  templateUrl: './header-return-button.component.html',
  styleUrls: ['./header-return-button.component.css']
})
export class HeaderReturnButtonComponent implements OnInit {

  location: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.location = this.route.routeConfig.path;
  }

  isSignUp(){
    return this.location.includes(PATH_SIGNUP);
  }

  isLogin(){
    return this.location.includes(PATH_LOGIN);
  }



  return() {
    if(this.isSignUp() || this.isLogin()){
      this.router.navigate([PATH_WELCOME]);
    }
    else{
      this.router.navigate([PATH_HOME]);
    }
  }

}
