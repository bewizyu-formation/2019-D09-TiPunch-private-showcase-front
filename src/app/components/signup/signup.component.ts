import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { passwordMatchValidator } from 'src/app/validators/password.validator';
import { Observable } from 'rxjs';
import { startWith, map, ignoreElements } from 'rxjs/operators';
import { userNameNotTakenValidator } from 'src/app/validators/unique.login.validator';
import { UserService } from 'src/app/user/user.service';
import { artistNameNotTakenValidator } from 'src/app/validators/unique.artistName.validator';
import { HttpClient } from '@angular/common/http';
import { CommuneService } from 'src/app/commune/commune.service';
import { User } from 'src/app/models/User';
import { Artist } from 'src/app/models/Artist';
import { Router } from '@angular/router';
import { PATH_WELCOME, PATH_LOGIN } from 'src/app/app-routing.constantes';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
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
  errorLoginTaken = false;
  errorArtistnameTaken = false;
  errorMessage = "L'identifiant choisi n'est pas disponible";

  constructor(public fb: FormBuilder,
    public userService: UserService,
    public communeService: CommuneService,
    private http: HttpClient,
    private route: Router) {

    /**
     * Creation of controlers
    */
    this.loginCtrl = fb.control('', [Validators.required]);
    this.passwordCtrl = fb.control('', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,50}$')]);
    this.confirmationPasswordCtrl = fb.control('', [Validators.required, passwordMatchValidator(this.passwordCtrl)]);
    this.emailCtrl = fb.control('', [Validators.email, Validators.required]);
    this.cityCtrl = fb.control('', [Validators.required]);
    this.artistNameCtrl = fb.control('', [Validators.required]);
    this.descriptionCtrl = fb.control('', [Validators.required, Validators.minLength(20), Validators.maxLength(250)]);

    /**
     * Creation of global form group
    */
    this.userForm = fb.group({
      login: this.loginCtrl,
      password: this.passwordCtrl,
      confirmationPassword: this.confirmationPasswordCtrl,
      email: this.emailCtrl,
      city: this.cityCtrl,
      artistName: this.artistNameCtrl,
      description: this.descriptionCtrl
    });

    /**
     * Creation of artist form group
    */
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

  getCities() {  //(change)="getCities()"
    this.communeService.commune(this.cityCtrl)
      .then(data => {
        this.cities = data;
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

  submit() {
    // 1) Appel réseau pour savoir si User = connu ou pas ?
    // 2) Si il est connu => message erreur
    // Sinon ==> Melodie code
    let checkLogin: boolean;
    let checkArtistname: boolean;
    this.userService.checkUsernameNotTaken(this.loginCtrl.value)
      .then((item) => {
        checkLogin = item;
        if (checkLogin) {
          console.log("Identifiant dispo");
          const roles = ['ROLE_USER']
          if (this.isHidden) {
            this.errorLoginTaken = false;
            // Only User
            const user = new User(this.loginCtrl.value, this.passwordCtrl.value, this.emailCtrl.value, this.cityCtrl.value, roles);
            this.userService.signUpUser(user);
            this.route.navigate([PATH_LOGIN]);
          }
          else {
            this.userService.checkArtistnameNotTaken(this.artistNameCtrl.value)
              .then((item) => {
                checkArtistname = item;
                if (checkArtistname) {
                  console.log("nom d'artiste dispo");
                  // Artist
                  this.errorArtistnameTaken = false;
                  const artist = new Artist(this.loginCtrl.value, this.passwordCtrl.value, this.emailCtrl.value, this.cityCtrl.value, this.artistNameCtrl.value, this.descriptionCtrl.value, roles);
                  this.userService.signUpArtist(artist);
                  this.route.navigate([PATH_LOGIN]);
                }
                else {
                  console.log("nom d'artiste non dispo");
                  this.errorArtistnameTaken = true;
                  console.log('error artistName Taken ' + this.errorArtistnameTaken);
                }
              })
          }
        }
        else {
          console.log("Identifiant non dispo");
          this.errorLoginTaken = true;
          console.log('error Login Taken ' + this.errorLoginTaken);
        }
      })
      .catch(e => {
        console.log(e)
      });

    /* if (checkLogin == false) {
 
       
       const roles = ['ROLE_USER']
       if (this.isHidden) {
         // Only User
         const user = new User(this.loginCtrl.value, this.passwordCtrl.value, this.emailCtrl.value, this.cityCtrl.value, roles);
         this.userService.signUpUser(user);
       }
       else {
         // Artist
         const artist = new Artist(this.loginCtrl.value, this.passwordCtrl.value, this.emailCtrl.value, this.cityCtrl.value, this.artistNameCtrl.value, this.descriptionCtrl.value, roles);
         this.userService.signUpArtist(artist);
       }
 
     } else {console.log("le login existe deja");}*/
    }

  cancel() {
    this.route.navigate([PATH_WELCOME]);
  }

  validate() {
    this.route.navigate([PATH_LOGIN]);

  }
}
