import {Injectable} from '@angular/core';
import {UserRepository} from './user.repository';
import {HttpResponse, HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    

  /**
   * Authentification JWT Token
   */
  public token: string;

  constructor(private userRepository: UserRepository , private http: HttpClient) {
  }

  /**
   * Login the user
   * @param username User login name
   * @param password User Password
   */
  login(username: string, password: string): Promise<string> {
    return new Promise ((resolve,reject) => {
      this.userRepository
        .login(username, password)
        .subscribe((response: HttpResponse<any>) => {
          this.token = response.headers.get('Authorization');
          console.log('Response Token : ', this.token);
          resolve(this.token);
        },()=>{
          reject('Erreur')
        }
        );
    });
  }


  checkUsernameNotTaken(login: string):boolean {
    let json = this.http.get(`http://localhost:8080/users/checkUsernameNotTaken/${login}`);
    return json['usernameNotTaken'];
  }

  checkArtistNameNotTaken(artistName: string):boolean {
    let json = this.http.get(`http://localhost:8080/users/checkArtistNameNotTaken/${artistName}`);
    return json['artistNameNotTaken'];
  }

}
