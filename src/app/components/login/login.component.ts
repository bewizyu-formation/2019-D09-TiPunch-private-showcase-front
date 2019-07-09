import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginCtrl: FormControl;
  passwordCtrl: FormControl;
  loginForm: FormGroup;
  token: string;
  error: string;
  isAuth = true;

  constructor(fb: FormBuilder, private service: UserService) {
    // FormControl creation for Username
    this.loginCtrl = fb.control('', [Validators.required]);
    // FormControl creation for Password
    this.passwordCtrl = fb.control('', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,50}$')]);

    // FormGroup creation
    this.loginForm = fb.group({
      login: this.loginCtrl,
      password: this.passwordCtrl,
    });
  }

  /**
   * User submit his username and password.
   * If authentication success => navigate to Home Page
   * Else a message tells him that something is wrong in his input
   */
  submit() {
    const login = this.loginCtrl.value;
    const password = this.passwordCtrl.value;
    this.service.login(login, password)
      .then((result) => {
        this.token = result;
        if (!this.isAuth) {
          this.isAuth = !this.isAuth;
        }
        // Redirection to homePage
      })
      .catch(e => {
        console.log('User unknown', e);
        this.error = 'Identifiant ou mot de passe incorrect';
        this.isAuth = !this.isAuth;
      });
  }

  /**
   * User return to welcome page
   */
  return() {

  }

  ngOnInit() {
  }

}
