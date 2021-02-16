import { Component } from '@angular/core';
import { Router, NavigationEnd,ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dcc';
  routerSubscription: any;

  constructor(public router: Router ){
    this. recallJsFuntions();  
  }


  recallJsFuntions() {
    this.routerSubscription = this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(event => {                 
        });
  }
}
