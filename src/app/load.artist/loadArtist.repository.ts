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
     */
    getArtists(latitude, longitude): Observable<any> {
        return this.http.get(`http://localhost:8080/artistdetails/localization?latitude=${latitude}&longitude=${longitude}`);
    }

    getArtistDetail(artistName): Observable<any> {
        return this.http.get(`http://localhost:8080/artistdetails/artist/${artistName}`);
    }

}
