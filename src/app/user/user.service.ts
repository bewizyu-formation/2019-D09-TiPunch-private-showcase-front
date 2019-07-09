import { Injectable } from '@angular/core';
import { UserRepository } from './user.repository';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { Artist } from '../models/Artist';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  /**
   * Authentification JWT Token
   */
  public token: string;

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

  signUpUser(user:User){
    console.log('USER SERVICE SIGNUP');
    return new Promise((resolve,reject)=>{

      this.userRepository.signUpUser(user)
        .subscribe((response:HttpResponse<any>)=>{
          console.log(response.status);
        })
    })
  }

  signUpArtist(artist:Artist){
    this.userRepository.signUpArtist(artist);
  }


  checkUsernameNotTaken(login: string): boolean {
    const json = this.http.get(`http://localhost:8080/users/checkUsernameNotTaken/${login}`);
    return json['usernameNotTaken'];
  }

  checkArtistNameNotTaken(artistName: string): boolean {
    const json = this.http.get(`http://localhost:8080/users/checkArtistNameNotTaken/${artistName}`);
    return json['artistNameNotTaken'];
  }
}
