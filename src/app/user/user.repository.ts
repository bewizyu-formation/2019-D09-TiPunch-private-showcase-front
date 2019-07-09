import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EnvironmentService} from '../services/environment.service';
import { User } from '../models/User';
import { Artist } from '../models/Artist';

export const RESOURCES_LOGIN = '/login';
export const RESOURCES_SIGNUP_USER = "/users/";

@Injectable({
  providedIn: 'root'
})
export class UserRepository {

  constructor(private http: HttpClient, private env: EnvironmentService) {
  }

  /**
   * login the current user and get the JWT token
   * @param username User login name
   * @param password User Password
   */
  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.env.getPrivateShowcaseApiConfig().uri}${RESOURCES_LOGIN}`, {
      username,
      password,
    },
      {observe: 'response'}
    );
  }

  signUpUser(user:User){
    console.log("REPO USER");
    console.log(user);
    console.log(user.username);
    return this.http.put(`${this.env.getPrivateShowcaseApiConfig().uri}${RESOURCES_SIGNUP_USER}`,{
      username: user.username,
      password: user.password,
      email: user.email,
      city: user.city,
      roles: user.roles    
    },{
      observe: 'response'
    });
  }

  signUpArtist(artist:Artist){
    return this.http.put(`${this.env.getPrivateShowcaseApiConfig().uri}/artists/`,{
      username: artist.username,
      password: artist.password,
      email: artist.email,
      city: artist.city,
      name: artist.name,
      description: artist.description,
      roles: artist.roles
    });
  }

  checkUsernameNotTaken(login: string): Observable<any> {
    return this.http.get(`http://localhost:8080/users/checkUsernameNotTaken/${login}`);
 
  }

  checkArtistNameNotTaken(artistName: string): Observable<any> {
    return this.http.get(`http://localhost:8080/users/checkArtistNameNotTaken/${artistName}`);
  }

  
}
