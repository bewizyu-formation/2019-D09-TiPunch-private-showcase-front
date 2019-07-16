import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordMatchValidator } from 'src/app/validators/password.validator';
import { PATH_WELCOME, PATH_LOGIN, PATH_HOME } from 'src/app/app-routing.constantes';
import { ArtistSignUp } from 'src/app/models/artistSU';
import { User } from 'src/app/models/user.model';
import { startWith, map } from 'rxjs/operators';
import { CommuneService } from 'src/app/commune/commune.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  user = new User('Anthony', 'battistini', 'anthony@gmail.com', 'Lyon', ['ROLE_USER']);
  oldPasswordCtrl: FormControl;
  passwordCtrl: FormControl;
  confirmationPasswordCtrl: FormControl;
  emailCtrl: FormControl;
  profilForm: FormGroup;

  isHidden = true;
  errorLoginTaken = false;
  errorArtistnameTaken = false;

  title = 'Private ShowCase';
  passwordIsFalse = false;
  passwordMatch:boolean;

  constructor(public fb: FormBuilder,
    public userService: UserService,
    public communeService: CommuneService,
    private http: HttpClient,
    private route: Router) {

    /**
     * Creation of controlers
    */
    this.oldPasswordCtrl = fb.control('', [Validators.required]);
    this.passwordCtrl = fb.control('', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,50}$')]);
    this.confirmationPasswordCtrl = fb.control('', [Validators.required, passwordMatchValidator(this.passwordCtrl)]);
    this.emailCtrl = fb.control('', [Validators.email, Validators.required]);


    /**
     * Creation of global form group
    */
    this.profilForm = fb.group({
      oldPassword: this.oldPasswordCtrl,
      password: this.passwordCtrl,
      confirmationPassword: this.confirmationPasswordCtrl,
      email: this.emailCtrl
    });
  }

  checkPasswordMatch(oldPasswordCtrl) {
    this.userService.checkPasswordMatch(oldPasswordCtrl.value)
      .then(data => {
        this.passwordMatch = data;
      }).catch(function (e) {
        console.log(e);
      });
  }


  ngOnInit() {

  }
  // Filter for cities autocomplete


  submit() {
    
    /* if (this.oldPasswordCtrl.value === this.user.password) {
      this.route.navigate([PATH_HOME]);
    } else {
      this.passwordIsFalse = true;
    } */
    this.checkPasswordMatch(this.oldPasswordCtrl)
    if (this.passwordMatch) {
      this.userService.updateUser(this.emailCtrl.value, this.passwordCtrl.value)
      this.route.navigate([PATH_HOME]);
    } else {
      this.passwordIsFalse = true;
    }

  }

  cancel() {
    this.route.navigate([PATH_WELCOME]);
  }





}
