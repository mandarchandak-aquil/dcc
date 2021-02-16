import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer} from '@angular/platform-browser';
import {  FormBuilder, Validators } from '@angular/forms';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

import { CommonService } from '../../common/services/common/common.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public footerData: any;
  email: FormGroup;
  address:any;
  phone:any;
  timing:any;
  footerlogocontent:any;

  constructor(public comman:CommonService,private route: ActivatedRoute,private sanitizer: DomSanitizer,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.email = this.formBuilder.group({
      email : ['',[Validators.required,Validators.email]],
    });
    this.footerData = this.route.snapshot.data['footerData'];
    console.log(this.footerData, "footerData");
    
     this.address = this.sanitizer.bypassSecurityTrustHtml(this.footerData['details']['address']);
     this.phone = this.sanitizer.bypassSecurityTrustHtml(this.footerData['details']['phone']);
     this.timing = this.sanitizer.bypassSecurityTrustHtml(this.footerData['details']['timing']);
     this.footerlogocontent = this.sanitizer.bypassSecurityTrustHtml(this.footerData['details']['footerlogocontent']);

   
  }
  onSubmit(){

    this.comman.subscribeform(this.email.value).subscribe(data => {
   console.log(data,'send');
  });
  }
}
