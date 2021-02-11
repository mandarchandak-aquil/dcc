import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
// import * as $ from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';

import { HomeService } from '../../common/services/home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public homepage: any;

  topsectionContent:any;
  aboutsectionContent:any;
  servicesectionContent:any;
  teamsectionContent:any;
  pethealthsectionContent:any;
  footersectionContent:any;
  serviceheading: any;
  services: any = [];
  serviceList: any;
  pethealthheading: any;
  ourintentheading: any;

  constructor(public api_page: HomeService, private sanitizer: DomSanitizer, public router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.homepage = this.route.snapshot.data['homepage'];
    console.log(this.homepage, "homepage");    

    this.topsectionContent = this.sanitizer.bypassSecurityTrustHtml(this.homepage['topsection']['content']);
    this.aboutsectionContent = this.sanitizer.bypassSecurityTrustHtml(this.homepage['aboutsection']['content']);
    this.servicesectionContent = this.sanitizer.bypassSecurityTrustHtml(this.homepage['servicesection']['content']);
    this.teamsectionContent = this.sanitizer.bypassSecurityTrustHtml(this.homepage['teamsection']['content']);
    this.pethealthsectionContent = this.sanitizer.bypassSecurityTrustHtml(this.homepage['pethealthsection']['content']);
    this.footersectionContent = this.sanitizer.bypassSecurityTrustHtml(this.homepage['footersection']['content']);
    this.serviceheading = this.sanitizer.bypassSecurityTrustHtml(this.homepage['servicesection']['heading']);
    this.pethealthheading = this.sanitizer.bypassSecurityTrustHtml(this.homepage['pethealthsection']['heading']);
    this.ourintentheading = this.sanitizer.bypassSecurityTrustHtml(this.homepage['footersection']['heading']);
    console.log("this.pethealthheading",this.pethealthheading);
    this.services = this.homepage['servicesection']['services'];
    this.serviceList = [];
    this.services.forEach((element:any) => {    
      if(element['display_on_home'] === 'Yes'){
        this.serviceList.push(element)
      }
    });
    // this.address = this.sanitizer.bypassSecurityTrustHtml(this.footerData['details']['address']);
    // <div class="content" [innerHTML]="address">
  }

}
