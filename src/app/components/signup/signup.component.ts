import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { passwordMatchValidator } from 'src/app/validators/password.validator';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  villes: string[] = ['lyon','paris','marseille','nice','toulouse','lorient','lozanne'];
  filteredCities: Observable<string[]>;

  loginCtrl: FormControl;
  passwordCtrl: FormControl;
  confirmationPasswordCtrl: FormControl;
  emailCtrl: FormControl;
  cityCtrl: FormControl;
  artistNameCtrl: FormControl;
  descriptionCtrl: FormControl;
  userForm: FormGroup;
  noArtistForm: FormGroup

  passwordFormGroup: FormGroup;
  isHidden:boolean= true;

  constructor(fb: FormBuilder) {
    // Creation of controlers
    this.loginCtrl = fb.control('', [Validators.required]);
    this.passwordCtrl = fb.control('', [Validators.required ,Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,50}$")]);
    this.confirmationPasswordCtrl = fb.control('', [Validators.required, passwordMatchValidator(this.passwordCtrl)]);
    this.emailCtrl = fb.control('', [Validators.email, Validators.required]);
    this.cityCtrl = fb.control('', [Validators.required]);
    this.artistNameCtrl = fb.control('', [Validators.required]);
    this.descriptionCtrl = fb.control('', [Validators.required , Validators.maxLength(250)]);


    // Creation of global form group 
    this.userForm = fb.group({
      login: this.loginCtrl,
      password: this.passwordCtrl,
      confirmationPassword: this.confirmationPasswordCtrl,
      email: this.emailCtrl,
      city: this.cityCtrl,
      artistName: this.artistNameCtrl,
      description: this.descriptionCtrl
    });

    //Creation of no Artist form group
    this.noArtistForm = fb.group({
      login: this.loginCtrl,
      password: this.passwordCtrl,
      confirmationPassword: this.confirmationPasswordCtrl,
      email: this.emailCtrl,
      city: this.cityCtrl,
     
    });

  }
  handleClick(){
    this.isHidden=!this.isHidden;
  }

  ngOnInit() {
    this.filteredCities = this.cityCtrl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.villes.filter(option => option.toLowerCase().includes(filterValue));
  }
}
