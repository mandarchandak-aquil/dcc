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
  heading: any;
  left_content: any;
  right_content: any;
  services: any = [];
  footersection: any;

  constructor(private sanitizer: DomSanitizer, public router: Router, private route: ActivatedRoute) { }
  ngOnInit() {
    this.servicedata = this.route.snapshot.data['servicedata'];
    console.log(this.servicedata, "servicedata"); 
    this.heading =  this.sanitizer.bypassSecurityTrustHtml(this.servicedata['details']['heading']);
    this.left_content = this.sanitizer.bypassSecurityTrustHtml(this.servicedata['details']['left_content']);
    this.right_content = this.sanitizer.bypassSecurityTrustHtml(this.servicedata['details']['right_content']);
    this.services = this.servicedata['details']['services'];
    this.footersection = JSON.stringify(this.servicedata['footersection'])
    console.log("this.services",this.services);
  }

}

