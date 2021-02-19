import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
// import * as $ from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonService } from '../../common/services/common/common.service';
import { MetaServiceService } from '../../common/meta-service.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css','../../common/style.css']
})
export class TeamDetailsComponent implements OnInit {
  loading :boolean = true;
  doctors : any;
  public doctorsdata: any;
  heading: any;
  content: any;
  
  doctorsdetails: any = [];
  show:any=1;
  doctorcontent: any;
  footersection: any;
  public slug:any;
  constructor(private http: HttpClient,private meta : MetaServiceService,public comman:CommonService,private sanitizer: DomSanitizer, public router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loading = true;
    console.log(this.router.url.replace("/Team-Details/", ""))
    let data = this.router.url.replace("/Team-Details/", "");
    this.slug = data;
    let req = {
      "doctorid": data
    }
      this.comman.doctordetailspage(req).subscribe(datas=> {       
        this.doctorsdata = datas; 
        console.log(this.doctorsdata,'datas');
        this.heading =  this.sanitizer.bypassSecurityTrustHtml(this.doctorsdata['details']['experience_heading']);
        this.content = this.sanitizer.bypassSecurityTrustHtml(this.doctorsdata['details']['content']);
        this.doctorsdetails = JSON.stringify(this.doctorsdata['details']['doctorsdetails']);
        this.footersection = JSON.stringify(this.doctorsdata['footersection'])
        console.log("doctorsdetails",this.doctorsdetails);
        this.loading = false;
        this.MetaTags(); 
      });   
      
  }
  shows(id:any){
    this.show = id;
  }

  MetaTags(){  
    let dataReq = {
      "page": "doctors",
      "id": this.slug
    }
    console.log("slug",dataReq);
    this.meta.getProduct(dataReq).subscribe(data => {
        this.meta.updateMetaTags(data['seodata']);
        
    });
  }

  getsentize(param:any){
    this.doctorcontent = null;
    this.doctorcontent = this.sanitizer.bypassSecurityTrustHtml(param);
  }
}
