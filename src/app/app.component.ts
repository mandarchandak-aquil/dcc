import { Component } from '@angular/core';
import { Router, NavigationEnd,ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as AOS from 'aos';

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


  ngOnInit(){
  
    // scroll animate
      AOS.init(
        {
          duration: 1200,
          delay: 200,
          once: true
        }
    );
  }
  recallJsFuntions() {
    this.routerSubscription = this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(event => {                 
        });
  }
}
