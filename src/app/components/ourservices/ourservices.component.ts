import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
// import * as $ from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ourservices',
  templateUrl: './ourservices.component.html',
  styleUrls: ['./ourservices.component.css']
})
export class OurservicesComponent implements OnInit {

  public servicedata:any;
  constructor(private sanitizer: DomSanitizer, public router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.servicedata = this.route.snapshot.data['servicedata'];
    console.log(this.servicedata, "servicedata");    
  }

}
