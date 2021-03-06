import { Component, OnInit, ChangeDetectorRef, Input, ViewChild, NgZone, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CommonService } from '../../common/services/common/common.service';
import { MetaServiceService } from '../../common/meta-service.service';
@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {
  loading: boolean = true;
  career: FormGroup;
  contact: any = [];
  contacts: any;
  fileBase64: any;
  imageError: Number = 0;
  heading: any;
  left_content: any;
  right_content: any
  img1: any = [];
  img2: any = [];
  img3: any = [];
  img4: any = [];

  constructor(public comman: CommonService, private meta: MetaServiceService, private formBuilder: FormBuilder, private sanitizer: DomSanitizer, public router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getDataInit();
    this.career = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      reach: ['', [Validators.required]],
      tell_us: ['', [Validators.required]],
      resume: ['', [Validators.required]],
    });
  }

  get f() { return this.career.controls; }

  getDataInit() {
    this.loading = true;
    let dataReq = {
      "pagename": "careers"
    }
    this.comman.carerrsData(dataReq).subscribe(data => {
      if (data) {
        this.contact = data;
        this.heading = this.sanitizer.bypassSecurityTrustHtml(this.contact['details']['heading']);
        this.left_content = this.sanitizer.bypassSecurityTrustHtml(this.contact['details']['left_content']);
        this.right_content = this.sanitizer.bypassSecurityTrustHtml(this.contact['details']['right_content']);
        this.contacts = this.sanitizer.bypassSecurityTrustHtml(this.contact.details.contacts);
        this.img1 = this.contact['details']['image1'];
        this.img2 = this.contact['details']['image2'];
        this.img3 = this.contact['details']['image3'];
        this.img4 = this.contact['details']['image4'];
        console.log(this.img1, "contact");
        this.loading = false;
        this.MetaTags();
      }
    });
  }

  handleUpload(event: any) {
    this.imageError = 0;
    this.loading = true;
    console.log("file Upload", event.target.files[0], "size is", event.target.files[0].size)
    if (event.target.files[0].size <= 250000) {
      this.imageError = 0;
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.loading = false;
        this.fileBase64 = reader.result;
        console.log(this.fileBase64, "base 64 bytes");
      };
    } else {
      this.loading = false;
      this.imageError = 1;  // 1 for max size exceed;
      console.log("size exceed");
    }
  }

  onSubmit() {
    this.loading = true;
    let myFormValue = this.career.value;
    myFormValue.fileBase64 = this.fileBase64;
    console.log(myFormValue, 'myFormData');
    this.comman.career(myFormValue).subscribe(data => {
      this.loading = false;
      if (data['response'] == 200) {
        this.career.reset();
      }
      console.log(data, "contact");
    });
  }

  MetaTags() {
    let dataReq = {
      "page": "careers",
      "id": ""
    }
    this.meta.getProduct(dataReq).subscribe(data => {
      let url = this.router.url
      this.meta.updateMetaTags(data['seodata'], url);
    });
  }
}
