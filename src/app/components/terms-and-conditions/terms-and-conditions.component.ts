import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { MetaServiceService } from '../../common/meta-service.service';
import { CommonService } from '../../common/services/common/common.service';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.css']
})
export class TermsAndConditionsComponent implements OnInit {
  loading: boolean = true;
  public privacydata: any;
  heading: any;
  contain: any;
  privacylist: any;
  constructor(private sanitizer: DomSanitizer, public apiCall: CommonService, private meta: MetaServiceService, public router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getDataInit();
    this.MetaTags();
  }

  getDataInit() {
    this.loading = true;
    let dataReq = {
      "pagename": "terms-condition"
    }
    this.apiCall.termsCondition(dataReq).subscribe(data => {
      if (data) {       
        this.privacydata = data;
        this.heading = this.sanitizer.bypassSecurityTrustHtml(this.privacydata['topsection']['heading']);
        this.contain = this.sanitizer.bypassSecurityTrustHtml(this.privacydata['topsection']['content']);
        this.privacylist = this.privacydata['privacylistsection']['privacylist'];
        this.loading = false;
      }
    });
  }

  MetaTags() {
    let dataReq = {
      "page": "terms-condition",
      "id": ""
    }
    this.meta.getProduct(dataReq).subscribe(data => {
      let url = this.router.url
      this.meta.updateMetaTags(data['seodata'], url);
    });
  }

}
