import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
    providedIn: 'root'
})
export class ArtistRepository {
    constructor(private http: HttpClient) {
    }

    /**
     * Get the artists list
     * @param control input field
     */
    getArtists(departmentName: string): Observable<any> {
        console.log("in repository")
        return this.http.get(`http://localhost:8080/artistdetails/departments`);
    }
}
