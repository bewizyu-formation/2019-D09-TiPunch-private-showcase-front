import { Injectable } from '@angular/core';
import { UserRepository } from './user.repository';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { FormControl } from '@angular/forms';
import { ArtistSignUp } from '../models/artistSU';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  /**
   * Authentification JWT Token
   */
  public token: string;

  private checkLogin: boolean;
  private checkArtistname: boolean;

  constructor(private userRepository: UserRepository, private http: HttpClient) {
  }

  /**
   * Login the user
   */
  login(username: string, password: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.userRepository
        .login(username, password)
        .subscribe((response: HttpResponse<any>) => {
          this.token = response.headers.get('Authorization');
          console.log('Response Token : ', this.token);
          resolve(this.token);
        }, () => {
          reject('Erreur');
        },
        );
    });
  }

  signUpUser(user: User) {
    console.log('USER SERVICE SIGNUP');
    return new Promise((resolve, reject) => {

      this.userRepository.signUpUser(user)
        .subscribe((response: HttpResponse<any>) => {
          console.log(response.status);
        });
    });
  }

  signUpArtist(artist: ArtistSignUp) {
    console.log('ARTIST SERVICE SIGNUP');
    return new Promise((resolve, reject) => {

      this.userRepository.signUpArtist(artist)
        .subscribe((response: HttpResponse<any>) => {
          console.log(response.status);
        });
    });
  }

  
  checkUsernameNotTaken(login: FormControl): Promise<any> {
    return new Promise((resolve, reject) => {
      this.userRepository
        .checkUsernameNotTaken(login)
        .subscribe((response) => {
          const obj = JSON.parse(response.usernameNotTaken);
          console.log(obj);
          this.checkLogin = obj;
          resolve(this.checkLogin);
        }, () => {
          reject('Erreur');
        },
        );
    });
  }

  checkArtistnameNotTaken(name: FormControl): Promise<any> {
    return new Promise((resolve, reject) => {
      this.userRepository
        .checkArtistnameNotTaken(name)
        .subscribe((response) => {
          const obj = JSON.parse(response.artistNameNotTaken);
          console.log(obj);
          this.checkArtistname = obj;
          resolve(this.checkArtistname);
        }, () => {
          reject('Erreur');
        },
        );
    });
  }
}
