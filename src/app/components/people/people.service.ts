import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpClientHelper } from '../../config/client.helper';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { People } from './people'

@Injectable()
export class PeopleService {
    constructor(private http: HttpClient) { }
    peopleUrl = HttpClientHelper.baseURL + "people";
    
    private extractData(res: Response) {
        let body = res;
        return body || {};
    }
  
    
    getAllPeople(): Observable<People[]> {        
        return this.http.get<People[]>(this.peopleUrl);
    }
}
