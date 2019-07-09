import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvironmentService } from '../services/environment.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';



@Injectable({
  providedIn: 'root'
})
export class CommuneRepository {
  constructor(private http: HttpClient, private env: EnvironmentService) {
  }

  /**
   * Get the cities list
   * @param control input field
   */
  commune(control: FormControl): Observable<any> {
    console.log(control.value);
    return this.http.get(`https://geo.api.gouv.fr/communes?nom=${control.value}`);
  }
}
