import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { MetaServiceService } from '../../common/meta-service.service';
import { CommonService } from '../../common/services/common/common.service';

@Component({
  selector: 'app-ourservices',
  templateUrl: './ourservices.component.html',
  styleUrls: ['./ourservices.component.css', '../../common/style.css']
})
export class OurservicesComponent implements OnInit {
  loading: boolean = false;
  public servicedata: any;
  heading: any;
  left_content: any;
  right_content: any;
  services: any = [];

  constructor(private sanitizer: DomSanitizer, private meta: MetaServiceService, public router: Router, private route: ActivatedRoute, public apiCall: CommonService) { }
  ngOnInit() {
    this.getDataInit();
    this.MetaTags();
  }

  getDataInit() {
    this.loading = true;
    let dataReq = {
      "pagename": "our services"
    }
    this.apiCall.serviceData(dataReq).subscribe(data => {
      if (data) {
        this.servicedata = data;
        console.log(this.servicedata, "servicedata");
        this.heading = this.sanitizer.bypassSecurityTrustHtml(this.servicedata['details']['heading']);
        this.left_content = this.sanitizer.bypassSecurityTrustHtml(this.servicedata['details']['left_content']);
        this.right_content = this.sanitizer.bypassSecurityTrustHtml(this.servicedata['details']['right_content']);
        this.services = this.servicedata['details']['services'];
        console.log("this.services", this.services);
        this.loading = false;
      }
    });
  }

  MetaTags() {
    let dataReq = {
      "page": "services",
      "id": ""
    }
    this.meta.getProduct(dataReq).subscribe(data => {
      let url = this.router.url
      this.meta.updateMetaTags(data['seodata'], url);
    });
  }
}

