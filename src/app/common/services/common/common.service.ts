import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from "../../../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({ 
  'Access-Control-Allow-Credentials' : 'true',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
  'Content-Type':  'application/json',
})
};

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  apiurl = environment.API_URL;
  constructor(private http: HttpClient) { }

  getHome() : Observable<any> {
    let req = {
      "pagename": "home"
    }
    
    return this.http.post<any>(this.apiurl+'homepage/v1', JSON.stringify(req), httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  career(req:any) : Observable<any> { 
    return this.http.post<any>(this.apiurl+'careersform/v1', JSON.stringify(req), httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  doctordetailspage(req:any) : Observable<any> { 
    return this.http.post<any>(this.apiurl+'doctordetailspage/v1', JSON.stringify(req), httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  servicetailspage(req:any) : Observable<any> { 
    return this.http.post<any>(this.apiurl+'servicedetailspage/v1', JSON.stringify(req), httpOptions)
    .pipe(
      retry(1),
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
