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
  deatilspara: any;
  constructor(private http: HttpClient,private meta : MetaServiceService,public comman:CommonService,private sanitizer: DomSanitizer, public router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loading = true;
    console.log(this.router.url.replace("/our-pet-care-doctors/", ""))
    let data = this.router.url.replace("/our-pet-care-doctors/", "");
    this.slug = data;
    let req = {
      "doctorid": data
    }
      this.comman.doctordetailspage(req).subscribe(datas=> {       
        this.doctorsdata = datas; 
        console.log(this.doctorsdata,'datas');
        this.heading =  this.sanitizer.bypassSecurityTrustHtml(this.doctorsdata['details']['experience_heading']);
        this.content = this.sanitizer.bypassSecurityTrustHtml(this.doctorsdata['details']['content']);
        this.doctorsdetails = this.doctorsdata['details']['doctorsdetails'];
        this.footersection = JSON.stringify(this.doctorsdata['footersection']);
        this.deatilspara =  this.doctorsdata['details']['detailspara'];
        console.log("doctorsdetails",this.deatilspara);
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
      let url = this.router.url
      this.meta.updateMetaTags(data['seodata'],url);
    });
  }

  getsentize(param:any){
    this.doctorcontent = null;
    this.doctorcontent = this.sanitizer.bypassSecurityTrustHtml(param);
  }
}
