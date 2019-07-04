import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { passwordMatchValidator, passwordValidator } from 'src/app/validators/password.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  loginCtrl: FormControl;
  passwordCtrl: FormControl;
  confirmationPasswordCtrl: FormControl;
  emailCtrl: FormControl;
  cityCtrl: FormControl;
  artistNameCtrl: FormControl;
  descriptionCtrl: FormControl;
  userForm: FormGroup;

  constructor(fb: FormBuilder) {
    // Création des contrôles
    this.loginCtrl = fb.control('', [Validators.required]);
    this.passwordCtrl = fb.control('', [Validators.required ,Validators.pattern("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$") /*, passwordValidator*/]);
    this.confirmationPasswordCtrl = fb.control('', [Validators.required ]);
    this.emailCtrl = fb.control('', [Validators.email, Validators.required]);
    this.cityCtrl = fb.control('', [Validators.required]);
    this.artistNameCtrl = fb.control('', [Validators.required]);
    this.descriptionCtrl = fb.control('', [Validators.required , Validators.maxLength(250)]);


    // Création du groupe (formulaire)
    this.userForm = fb.group({
      login: this.loginCtrl,
      password: this.passwordCtrl,
      confirmationPassword: this.confirmationPasswordCtrl,
      email: this.emailCtrl,
      city: this.cityCtrl,
      artistName: this.artistNameCtrl,
      description: this.descriptionCtrl
    });
  }

  ngOnInit() {
  }

}
