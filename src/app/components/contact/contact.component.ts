import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
// import * as $ from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { MetaServiceService } from '../../common/meta-service.service';
import { CommonService } from '../../common/services/common/common.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css','../../common/style.css']
})
export class ContactComponent implements OnInit {
  loading :boolean = false;
  contact : any = [];
  odddata : any = [];
  evendata : any =[];
  contacts :any;
  footersection: any;
  heading : any;
  left_content : any;
  right_content : any
  locationList : any;
  image_1: any;
  image_2: any;
  address: any;
  button_1_text: any;
  button_2_text: any;
  button_2_link  : any;
  locations : any;
  constructor(private sanitizer: DomSanitizer, public apiCall : CommonService, private meta : MetaServiceService, public router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getDataInit();
  }

  getDataInit(){
    this.loading = true;
    this.contact = []
    let dataReq = {
      "pagename": "contact"
    }
  
    this.apiCall.contactData(dataReq).subscribe(data => {
      this.loading = false;  
      console.log(data, "contact Data")
      if(data){
        this.contact = data;        
        this.heading =  this.sanitizer.bypassSecurityTrustHtml(this.contact['details']['heading']);
        this.left_content = this.sanitizer.bypassSecurityTrustHtml(this.contact['details']['left_content']);
        this.right_content = this.sanitizer.bypassSecurityTrustHtml(this.contact['details']['right_content']);
        this.locationList = this.contact['locations'];
        this.locations = this.contact['location_details'];
        this.odddata=[];
        this.evendata=[];
        for(let i=0; i<this.locations.length; i++){
          if(i%2 == 0){
            this.odddata.push(this.locations[i]);
            console.log("odddata",this.odddata);
          }else{
            this.evendata.push(this.locations[i]);
            console.log("evendata",this.evendata);
          }
        }
        console.log("location_details",this.locations);
        this.footersection = JSON.stringify(this.contact['footersection']);   
        this.MetaTags();
      }  
  });    
  }

  MetaTags(){
    let dataReq = {
      "page": "contact",
      "id": ""
    }
    this.meta.getProduct(dataReq).subscribe(data => {
        this.meta.updateMetaTags(data['seodata']);   
    });
  }

}
