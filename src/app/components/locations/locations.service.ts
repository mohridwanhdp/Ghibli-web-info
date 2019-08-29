import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpClientHelper } from '../../config/client.helper';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { Locations } from './locations'

@Injectable()
export class LocationsService {
    constructor(private http: HttpClient) { }
    locationsUrl = HttpClientHelper.baseURL + "locations";
    private extractData(res: Response) {
        let body = res;
        return body || {};
    }
  
   
    getAllLocations(): Observable<Locations[]> {        
        return this.http.get<Locations[]>(this.locationsUrl);
    }
}
