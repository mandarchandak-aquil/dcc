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
  loading:boolean = false;
  constructor(public router: Router ){
    this. recallJsFuntions();  
  }


  ngOnInit(){
  
    // scroll animate
      AOS.init(
        {
          duration: 700,         
          offset:50        
        }
    );
    setTimeout(() => {
 
    }, 2000);
  }
  ngAfterViewInit() {
    document.body.classList.add('siteLoad');
    this.loading = false;
  }
  recallJsFuntions() {
    this.routerSubscription = this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(event => {                 
        });
  }
}
