import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
// import * as $ from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';
import { MetaServiceService } from '../../common/meta-service.service';
@Component({
  selector: 'app-ourteam',
  templateUrl: './ourteam.component.html',
  styleUrls: ['./ourteam.component.css','../../common/style.css']
})
export class OurteamComponent implements OnInit {
  loading :boolean = true; 
  public teamsdata:any;
  heading: any;
  left_content: any;
  right_content: any;
  doctors: any = [];
  short_desc:any;
  locations: any;
  footersection: any;
  constructor(private sanitizer: DomSanitizer,private meta : MetaServiceService, public router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.MetaTags();
    this.teamsdata = this.route.snapshot.data['teamsdata'];
    console.log(this.teamsdata, "teamsdata");    
    this.heading =  this.sanitizer.bypassSecurityTrustHtml(this.teamsdata['details']['heading']);
    this.left_content = this.sanitizer.bypassSecurityTrustHtml(this.teamsdata['details']['left_content']);
    this.right_content = this.sanitizer.bypassSecurityTrustHtml(this.teamsdata['details']['right_content']);
    this.doctors = this.teamsdata['details']['doctors'];
    this.locations = this.teamsdata['details']['locations'];
    this.footersection = JSON.stringify(this.teamsdata['footersection'])
  }


  getsentize(param:any){
    this.short_desc = null;
    this.short_desc = this.sanitizer.bypassSecurityTrustHtml(param);
  }

  MetaTags(){
    let dataReq = {
      "page": "team",
      "id": ""
    }
    this.meta.getProduct(dataReq).subscribe(data => {
        this.meta.updateMetaTags(data['seodata']);
        this.loading = false;
    });
  }

}

