import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { Meta } from '@angular/platform-browser';
import { environment } from "../../environments/environment";
import { DOCUMENT } from '@angular/common';
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
export class MetaServiceService {

  apiurl = environment.API_URL;
    // constructor() { }
    constructor(private meta: Meta,private http: HttpClient) { }
    updateMetaTags(metaTags : any){
      var metaData:any= {
        "metaTags" :[
          { name: 'description', content:metaTags.description},
          { property: 'og:title', content:metaTags.title },
          { proprety: 'og:description', content:metaTags.description},          
          { property: 'og:keywords', content: metaTags.keywords },           
        ]
      }
    //  var element: any = document.querySelector(`link[rel='canonical']`) || null
    //  if (element == null) {
    //      element = document.createElement('link') as HTMLLinkElement;
    //      document.head.appendChild(element);
    //  }
    //  element.setAttribute('rel', 'canonical')
    //  element.setAttribute('href', metaTags.canonical_tag)
      console.log(metaData,"metaTagsmetaTags",metaTags);
      metaData['metaTags'].forEach((m:any) =>    
          this.meta.updateTag(m)
      );
    }
    getProduct(req:any ) : Observable<any > {
      return this.http.post<any>(this.apiurl+'seodata/v1', JSON.stringify(req), httpOptions)
      .pipe(
        retry(1),
        // catchError(this.handleError)
      )
    }
    // Error handling 
  //   handleError(error:any) {
  //     let errorMessage = '';
  //     if(error.error instanceof ErrorEvent) {
  //       // Get client-side error
  //       errorMessage = error.error.message;
  //     } else {
  //       // Get server-side error
  //       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //     }
  //     // window.alert(errorMessage);
  //     console.log(errorMessage)
  //     return throwError(errorMessage);
  //  }
}
