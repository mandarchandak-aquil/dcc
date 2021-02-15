import { Component, OnInit,ChangeDetectorRef,Input, ViewChild ,NgZone,ElementRef } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
// import * as $ from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {  FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { CommonService } from '../../common/services/common/common.service';
import { MetaServiceService } from '../../common/meta-service.service';
@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {
  loading :boolean = true; 
  career: FormGroup;
  contact : any = [];
  contacts :any;
  footersection: any;
  // certEscolar: File ;

  constructor(public comman:CommonService,private meta : MetaServiceService, private formBuilder: FormBuilder, private sanitizer: DomSanitizer, public router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.MetaTags();
    this.career = this.formBuilder.group({
        name : ['',[Validators.required]],
        email: ['',[Validators.required]],
        reach: ['',[Validators.required]],
        tell_us: ['',[Validators.required]],
        resume: ['',[Validators.required]],
        fileSource: ['',[Validators.required]],
    });
    this.contact = this.route.snapshot.data['contact'];
    this.contacts = this.sanitizer.bypassSecurityTrustHtml(this.contact.details.contacts);
    this.footersection = JSON.stringify(this.contact['footersection']) 
     console.log(this.contact, "contact");    
  }
  // public onFileChanged(event: any) {
  //   if (event.target.files && event.target.files.length) {
  //   const file = event.target.files[0];
  //   this.certEscolar = file;
  //   }
  // }
  // onFileChange(event) {
  
  //   if (event.target.files.length > 0) {
  //     const file = event.target.files[0];
  //     this.career.patchValue({
  //       fileSource: file
  //     });
  //   }
  // }
  onSubmit(){
    let myFormValue = this.career.value;
    console.log(myFormValue,'myFormData');
    let myFormData = new FormData();
    for ( let i = 0; i < myFormValue.length; i++ ) {         
      for ( let key of myFormValue) {
        myFormData.append(key, myFormValue[key]);
      }
    }
    console.log(myFormData,'myFormData');
    this.comman.career(this.career.value).subscribe(data=> {
      if(data['response'] == 200){
        this.career.reset();
      }
    console.log(data, "contact");    
    });
  }

  MetaTags(){
    let dataReq = {
      "page": "careers",
      "id": ""
    }
    this.meta.getProduct(dataReq).subscribe(data => {
        this.meta.updateMetaTags(data['seodata']);
        this.loading = false;
    });
  }
  
}
