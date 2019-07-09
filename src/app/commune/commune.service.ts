import { Injectable } from "@angular/core";
import { CommuneRepository } from "./commune.repository";
import { HttpClient } from "@angular/common/http";
import { City } from "../models/city";
import { FormControl } from "@angular/forms";



@Injectable({
    providedIn: 'root'
  })
  export class CommuneService {

    cities:Array<string>;
     
    constructor(private communeRepository: CommuneRepository , private http: HttpClient) {
    }

    /**
   * Get the cities name list
   * @param control input field
   */
    commune(control:FormControl): Promise<Array<string>> {
        return new Promise ((resolve) => {
          this.communeRepository
            .commune(control)
            .subscribe((response) => {
                this.cities = response.map(item=> item.nom);
              resolve(this.cities);
            });
        });
      }


}