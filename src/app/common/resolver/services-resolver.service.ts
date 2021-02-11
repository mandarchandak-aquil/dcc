import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from "../../../environments/environment";

const httpOptions = {
    headers: new HttpHeaders({ 
    'Access-Control-Allow-Credentials' : 'true',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
    'Content-Type':  'application/json',
  })
  };

@Injectable()
export class ServicesResolver implements Resolve<any> {
    apiurl = environment.API_URL;
    constructor(private http: HttpClient) { }

    resolve(): Observable<any> {
        let req = {
            "pagename": "our services"
        }
        return this.http.post<any>(this.apiurl+'servicespage/v1', JSON.stringify(req), httpOptions).pipe(
        map( (dataFromApi) => dataFromApi ),
        catchError(this.handleError)
        )
    }

      // Error handling 
   handleError(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // window.alert(errorMessage); 
    console.log(errorMessage)
    return throwError(errorMessage);
 }
}