import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, Validators } from '@angular/forms';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { CommonService } from '../../common/services/common/common.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public footerData: any;
  email: FormGroup;
  address: any;
  phone: any;
  timing: any;
  footerlogocontent: any;
  submitted = false;
  success: boolean = false;
  failed: boolean = false;
  footersection: any
  heading: any;
  content: any;
  constructor(public comman: CommonService, private route: ActivatedRoute, private sanitizer: DomSanitizer, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.email = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
    this.getDataInit();
  }

  getDataInit() {
    let dataReq = {
      "pagename": "footer"
    }
    this.comman.footerData(dataReq).subscribe(data => {
      if (data) {
        this.footerData = data;
        console.log(this.footerData, "footerData");
        this.footersection = this.footerData['footersection'];
        this.heading = this.sanitizer.bypassSecurityTrustHtml(this.footersection['heading']);
        this.content = this.sanitizer.bypassSecurityTrustHtml(this.footersection['content']);
        console.log(this.heading, "footersection footersection");
        this.address = this.sanitizer.bypassSecurityTrustHtml(this.footerData['details']['address']);
        this.phone = this.sanitizer.bypassSecurityTrustHtml(this.footerData['details']['phone']);
        this.timing = this.sanitizer.bypassSecurityTrustHtml(this.footerData['details']['timing']);
        this.footerlogocontent = this.sanitizer.bypassSecurityTrustHtml(this.footerData['details']['footerlogocontent']);
      }
    });
  }

  get f() { return this.email.controls; }

  hidemsg() {
    setTimeout(() => {
      this.email.controls.email.setErrors(null)
    }, 3000);
  }

  onSubmit() {
    this.submitted = true;
    if (this.email.controls.email.value == '') {
      this.failed = true;
      setTimeout(() => {
        this.failed = false;
      }, 3000);
    } else {
      this.comman.subscribeform(this.email.value).subscribe(data => {
        if (data['response'] == 200) {
          this.email.reset();
          this.email.controls.email.setValidators(Validators.required);
          this.email.controls.email.setValidators(Validators.email);
          this.email.updateValueAndValidity();
          this.success = true;
          setTimeout(() => {
            this.success = false;
          }, 3000);
        }
        console.log(data, 'send');
      });
    }
  }
}
