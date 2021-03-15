import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { MetaServiceService } from '../../common/meta-service.service';
import { CommonService } from '../../common/services/common/common.service';
@Component({
  selector: 'app-ourteam',
  templateUrl: './ourteam.component.html',
  styleUrls: ['./ourteam.component.css', '../../common/style.css']
})
export class OurteamComponent implements OnInit {
  loading: boolean = true;
  public teamsdata: any;
  heading: any;
  left_content: any;
  right_content: any;
  doctors: any = [];
  short_desc: any;
  locations: any;
  constructor(private sanitizer: DomSanitizer, public apiCall: CommonService, private meta: MetaServiceService, public router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getDataInit();
    this.MetaTags();
  }

  getDataInit() {
    let dataReq = {
      "pagename": "our team"
    }
    this.apiCall.teamsData(dataReq).subscribe(data => {
      if (data) {
        this.teamsdata = data;
        console.log(this.teamsdata, "teamsdata", this.teamsdata['details']['doctors']);
        this.teamsdata['details']['doctors'].forEach((element: any) => {
          this.doctors.push(element)
          data.short_description
        });
        console.log(this.doctors, "doctors List");
        this.heading = this.sanitizer.bypassSecurityTrustHtml(this.teamsdata['details']['heading']);
        this.left_content = this.sanitizer.bypassSecurityTrustHtml(this.teamsdata['details']['left_content']);
        this.right_content = this.sanitizer.bypassSecurityTrustHtml(this.teamsdata['details']['right_content']);
        this.locations = this.teamsdata['details']['locations'];
        this.loading = false;
      } else {
        this.loading = false;
      }
    });
  }


  getsentize(param: any) {
    this.short_desc = null;
    this.short_desc = this.sanitizer.bypassSecurityTrustHtml(param);
  }

  MetaTags() {
    let dataReq = {
      "page": "teams",
      "id": ""
    }
    this.meta.getProduct(dataReq).subscribe(data => {
      let url = this.router.url
      this.meta.updateMetaTags(data['seodata'], url);
    });
  }
}

