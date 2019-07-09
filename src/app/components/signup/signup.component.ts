import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { passwordMatchValidator } from 'src/app/validators/password.validator';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { userNameNotTakenValidator } from 'src/app/validators/unique.login.validator';
import { UserService } from 'src/app/user/user.service';
import { ArtistNameNotTakenValidator } from 'src/app/validators/unique.artistName.validator';
import { HttpClient } from '@angular/common/http';
import { CommuneService } from 'src/app/commune/commune.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // cities: string[] = ['lyon','paris','marseille','nice','toulouse','lorient','lozanne'];
  filteredCities: Observable<string[]>;

  cities: Array<string> = [];

  loginCtrl: FormControl;
  passwordCtrl: FormControl;
  confirmationPasswordCtrl: FormControl;
  emailCtrl: FormControl;
  cityCtrl: FormControl;
  artistNameCtrl: FormControl;
  descriptionCtrl: FormControl;
  userForm: FormGroup;
  noArtistForm: FormGroup;

  isHidden = true;

  constructor(public fb: FormBuilder, public userService: UserService, public communeService: CommuneService, private http: HttpClient) {


    // Creation of controlers
    this.loginCtrl = fb.control('', [Validators.required, userNameNotTakenValidator(this.userService)]);
    this.passwordCtrl = fb.control('', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,50}$')]);
    this.confirmationPasswordCtrl = fb.control('', [Validators.required, passwordMatchValidator(this.passwordCtrl)]);
    this.emailCtrl = fb.control('', [Validators.email, Validators.required]);
    this.cityCtrl = fb.control('', [Validators.required]);
    this.artistNameCtrl = fb.control('', [Validators.required, ArtistNameNotTakenValidator(this.userService)]);
    this.descriptionCtrl = fb.control('', [Validators.required, Validators.maxLength(250)]);


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

    // Creation of no Artist form group
    this.noArtistForm = fb.group({
      login: this.loginCtrl,
      password: this.passwordCtrl,
      confirmationPassword: this.confirmationPasswordCtrl,
      email: this.emailCtrl,
      city: this.cityCtrl,

    });

  }

  handleClick() {
    this.isHidden = !this.isHidden;
  }

  getCities() {
    this.communeService.commune(this.cityCtrl)
      .then(data => {
        this.cities = data;
        console.log(this.cities);
      });
  }

  ngOnInit() {
    this.getCities();

    this.filteredCities = this.cityCtrl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }


  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.cities.filter(option => option.toLowerCase().includes(filterValue));
  }
}