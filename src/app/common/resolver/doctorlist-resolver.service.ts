import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from "../../../environments/environment";
import { Router,ActivatedRoute } from '@angular/router';

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
export class DoctorlistResolver implements Resolve<any> {
    apiurl = environment.API_URL;
    constructor(public router: ActivatedRoute,private http: HttpClient) {
      console.log(router.snapshot.parent,'router');
     }

    resolve(): Observable<any> {   
        this.router.params.subscribe(function(slug){
           console.log('params',slug);
     
        })
        let req = {
            "doctorid": ""
        }
        return this.http.post<any>(this.apiurl+'doctordetailspage/v1', JSON.stringify(req), httpOptions).pipe(
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