import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
// import * as $ from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { MetaServiceService } from '../../common/meta-service.service';
import { CommonService } from '../../common/services/common/common.service';

@Component({
  selector: 'app-contact-delhi',
  templateUrl: './contact-delhi.component.html',
  styleUrls: ['./contact-delhi.component.css','../../common/style.css']
})
export class ContactDelhiComponent implements OnInit {
  loading :boolean = false; 
  contact : any = [];
  contactSlug;
  contacts :any;
  footersection: any;
  constructor( private sanitizer: DomSanitizer, public apiCall : CommonService, private meta : MetaServiceService, public router: Router, private route: ActivatedRoute) { 
    
    this.contactSlug = this.route.snapshot.paramMap.get('slug');
    // this.contact = this.route.paramMap.pipe(map(paramMap =>paramMap.get('slug')))
    console.log(this.contactSlug ,"contact slug")
    // this.route.queryParams.subscribe(params => {
    //   console.log(params ,"slug")
    //   this.contact = params['slug'];
    // });
  }


  ngOnInit(): void {   
    // this.contact = this.route.snapshot.data['contact'];
    // this.contacts = this.sanitizer.bypassSecurityTrustHtml(this.contact.details.contacts);
    //  console.log(this.contact, "contact");    
    //  this.footersection = JSON.stringify(this.contact['footersection']);   
     this.getDataInit();
     
  }

  getDataInit(){
    this.loading = true;
    this.contact = []
    let dataReq = {
      "contactid": this.contactSlug
    }
  
    this.apiCall.contactDelhiData(dataReq).subscribe(data => {
      this.loading = false;  
      console.log(data, "contact Data")
      if(data){
        this.contact = data;        
        this.contacts = this.sanitizer.bypassSecurityTrustHtml(this.contact.details.contacts);
        console.log(this.contact, "contact");    
        this.footersection = JSON.stringify(this.contact['footersection']);   
        this.MetaTags();
      }  
  });    
  }

  MetaTags(){
    
    let slug = this.contact.details.slug;
    let dataReq = {
      "page": "contactus",
      "id": slug
    }
    console.log("slug",dataReq);
    this.meta.getProduct(dataReq).subscribe(data => {
        this.meta.updateMetaTags(data['seodata']);
        this.loading = false;
    });
  }

}
