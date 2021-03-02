import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
// import * as $ from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {  FormBuilder, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { MetaServiceService } from '../../common/meta-service.service';
import { CommonService } from '../../common/services/common/common.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css','../../common/style.css']
})
export class ContactComponent implements OnInit {
  loading :boolean = false;
  career: FormGroup;
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
  fileBase64 : any;
  imageError : Number = 0;
  enquiryheading: any;
  enquiryleft_content:any;
  enquiryright_content: any;
  enquiryimgs:any = [];
  img1:any=[];
  img2:any=[];
  img3:any=[];
  img4:any=[];
  constructor(private sanitizer: DomSanitizer, private vps: ViewportScroller,private formBuilder: FormBuilder, public apiCall : CommonService, private meta : MetaServiceService, public router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getDataInit();
    this.career = this.formBuilder.group({
      name : ['',[Validators.required]],
      email: ['',[Validators.required,Validators.email]],
      phoneno: ['',[Validators.required,Validators.pattern('^[0-9]{10}$'),Validators.minLength(10), Validators.maxLength(10)]],
      message: ['',[Validators.required]],   
  });
  }
  get f() { return this.career.controls; }
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
      
        this.enquiryheading = this.contact['enquiry_details']['heading'];
        this.enquiryleft_content = this.sanitizer.bypassSecurityTrustHtml(this.contact['enquiry_details']['left_content']);
        this.enquiryright_content = this.sanitizer.bypassSecurityTrustHtml(this.contact['enquiry_details']['right_content']);
        // this.enquiryimgs = this.contact['enquiry_details']['images'];
        this.img1 = this.contact['enquiry_details']['images'][0]['image'];
        this.img2 = this.contact['enquiry_details']['images'][1]['image'];
        this.img3 = this.contact['enquiry_details']['images'][2]['image'];
        this.img4 = this.contact['enquiry_details']['images'][3]['image'];
        console.log("enquiryimgs",this.img1);
        this.footersection = JSON.stringify(this.contact['footersection']);   
        this.MetaTags();
      }  
  });    
  }

  scroll(id:any) {
    this.vps.scrollToAnchor(id);
  }

onSubmit(){
  this.loading = true;
  let myFormValue = this.career.value;
  console.log(myFormValue,'myFormData'); 
  this.apiCall.contactForm(myFormValue).subscribe(data=> {
    this.loading = false;
    if(data['response'] == 200){
      this.career.reset();
    }
    console.log(data, "contact");    
  });
}

  MetaTags(){
    let dataReq = {
      "page": "contact",
      "id": ""
    }
    this.meta.getProduct(dataReq).subscribe(data => {
      let url = this.router.url
        this.meta.updateMetaTags(data['seodata'],url);   
    });
  }

}
