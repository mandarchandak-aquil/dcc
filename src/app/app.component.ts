import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

import { MetaServiceService } from './common/meta-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dcc';
  routerSubscription: any;

  constructor(public router: Router, private meta : MetaServiceService ){
this. recallJsFuntions();
this.AutoInsurance();
  }
  recallJsFuntions() {
    this.routerSubscription = this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(event => {
          
         
        });
  }

  AutoInsurance(){
 
    let dataReq = {
        "language_id": 2
      }
       this.meta.getProduct(dataReq).subscribe(data => {
       
        if(data['status'] == "success"){          
          this.meta.updateMetaTags(data['page']);
        }
        
      });
  
  }
}
