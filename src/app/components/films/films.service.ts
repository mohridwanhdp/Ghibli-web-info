import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpClientHelper } from '../../config/client.helper';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { Films } from './films'

@Injectable()
export class FilmsService {
    constructor(private http: HttpClient) { }
    filmsUrl = HttpClientHelper.baseURL + "films";
    private extractData(res: Response) {
        let body = res;
        return body || {};
    }
  
    // getAllFilms(): any {
    //     console.log(this.filmsUrl);
    //     let films:any;
    //     this.http.get(this.filmsUrl).subscribe(
    //         (res) => 
    //         {console.log(res),
    //         films = res}
    //     );

    //     return films;
    // }

    getAllFilms(): Observable<Films[]> {        
        return this.http.get<Films[]>(this.filmsUrl);
    }
}
