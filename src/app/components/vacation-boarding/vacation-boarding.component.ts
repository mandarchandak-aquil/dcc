import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonService } from '../../common/services/common/common.service';
import { MetaServiceService } from '../../common/meta-service.service';
@Component({
  selector: 'app-vacation-boarding',
  templateUrl: './vacation-boarding.component.html',
  styleUrls: ['./vacation-boarding.component.css', "../../common/style.css"]
})
export class VacationBoardingComponent implements OnInit {
  loading: boolean = true;
  public vacationdata: any;
  heading: any;
  left_content: any;
  right_content: any;
  footersection: any;
  left_content_bottom: any;
  right_content_bottom: any;
  faqheading: any;
  bordingdetails: any = [];
  faq_question: any = [];
  leftfaq: any = [];
  rightfaq: any = [];
  public slug: any;

  constructor(public comman: CommonService, private meta: MetaServiceService, private sanitizer: DomSanitizer, public router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.router.url.replace("/DCC-pet-services/", ""))
    let data = this.router.url.replace("/DCC-pet-services/", "");
    this.slug = data;
    let req = {
      "serviceid": data
    }
    this.comman.servicetailspage(req).subscribe(datas => {
      console.log(datas, 'datas');
      this.vacationdata = datas;
      console.log("this.vacationdata", this.vacationdata);
      this.heading = this.sanitizer.bypassSecurityTrustHtml(this.vacationdata['details']['heading']);
      this.left_content = this.sanitizer.bypassSecurityTrustHtml(this.vacationdata['details']['left_content']);
      this.right_content = this.sanitizer.bypassSecurityTrustHtml(this.vacationdata['details']['right_content']);
      this.left_content_bottom = this.sanitizer.bypassSecurityTrustHtml(this.vacationdata['details']['left_content_bottom']);
      this.right_content_bottom = this.sanitizer.bypassSecurityTrustHtml(this.vacationdata['details']['right_content_bottom']);
      this.faqheading = this.sanitizer.bypassSecurityTrustHtml(this.vacationdata['faqsection']['heading']);
      this.faq_question = this.vacationdata.faqsection.faqs.length / 2;
      let len = this.vacationdata.faqsection.faqs.length / 2;
      let right = [];
      console.log(this.vacationdata.faqsection.faqs.length, len, 'len')
      this.rightfaq = []
      for (let i = 0; i < len; i++) {
        if (this.vacationdata.faqsection.faqs[i]) {
          this.rightfaq.push(this.vacationdata.faqsection.faqs[i]);
        }
      }
      this.leftfaq = []
      for (let j = len; j < this.vacationdata.faqsection.faqs.length; j++) {
        if (this.vacationdata.faqsection.faqs[j]) {
          this.leftfaq.push(this.vacationdata.faqsection.faqs[j]);
        }
      }
      console.log("leftcontent", this.leftfaq, "right", this.rightfaq);
      let datasnew = datas;
      this.bordingdetails = datasnew.details.images;
      console.log(this.bordingdetails[0].image);
      this.loading = false;
      this.MetaTags();
    });
  }

  MetaTags() {
    let dataReq = {
      "page": "services",
      "id": this.slug
    }
    console.log("slug", dataReq);
    this.meta.getProduct(dataReq).subscribe(data => {
      let url = this.router.url
      this.meta.updateMetaTags(data['seodata'], url);
    });
  }
}