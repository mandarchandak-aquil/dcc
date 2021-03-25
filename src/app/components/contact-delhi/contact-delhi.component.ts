import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { MetaServiceService } from '../../common/meta-service.service';
import { CommonService } from '../../common/services/common/common.service';

@Component({
  selector: 'app-contact-delhi',
  templateUrl: './contact-delhi.component.html',
  styleUrls: ['./contact-delhi.component.css', '../../common/style.css']
})
export class ContactDelhiComponent implements OnInit {
  loading: boolean = false;
  contact: any = [];
  career: FormGroup;
  contactSlug;
  contacts: any;
  footersection: any;
  heading: any;
  left_content: any;
  right_content: any
  contactlist: any;
  image_1: any;
  image_2: any;
  image_1_webp:any;
  address: any;
  button_1_text: any;
  button_2_text: any;
  button_2_link: any;
  locations: any;
  dataurl: any;
  image_1_alt: any;
  image_2_webp: any;
  image_2_alt: any;
  enquiryheading: any;
  enquiryleft_content: any;
  enquiryright_content: any;
  enquiryimgs: any = [];
  img1: any = [];
  img2: any = [];
  img3: any = [];
  img4: any = [];
  constructor(private sanitizer: DomSanitizer,private formBuilder: FormBuilder, public apiCall: CommonService, private meta: MetaServiceService, public router: Router, private route: ActivatedRoute) {
    this.contactSlug = this.route.snapshot.paramMap.get('slug');
    console.log(this.contactSlug, "contact slug")
  }

  ngOnInit(): void {
    let data = this.router.url;
    this.dataurl = this.router.url.replace("/contact-us/", "");
    console.log(this.dataurl, 'dataurl');
    this.getDataInit();

    this.career = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneno: ['', [Validators.required, Validators.pattern('^[0-9]{10}$'), Validators.minLength(10), Validators.maxLength(10)]],
      message: ['', [Validators.required]],
      type: this.dataurl,
    });
  }

  get f() { return this.career.controls; }

  getDataInit() {
    this.loading = true;
    this.contact = []
    let dataReq = {
      "contactid": this.contactSlug
    }
    this.apiCall.contactDelhiData(dataReq).subscribe(data => {
      this.loading = false;
      console.log(data, "contact Data")
      if (data) {
        this.contact = data;
        this.contacts = this.sanitizer.bypassSecurityTrustHtml(this.contact.details.contacts);
        console.log(this.contact, "contact");
        this.heading = this.sanitizer.bypassSecurityTrustHtml(this.contact.details.heading);
        this.right_content = this.sanitizer.bypassSecurityTrustHtml(this.contact.details.right_content);
        this.left_content = this.sanitizer.bypassSecurityTrustHtml(this.contact.details.left_content);
        this.contactlist = this.contact['details']['contactlist'];
        this.image_1 = this.contact['details']['image_1']['link'];
        this.image_1_webp = this.contact['details']['image_1']['link_webp'];
        this.image_1_alt = this.contact['details']['image_1']['alt'];
        this.image_2 = this.contact['details']['image_2']['link'];
        this.image_2_webp = this.contact['details']['image_2']['link_webp'];
        this.image_2_alt= this.contact['details']['image_2']['alt'];
        this.address = this.sanitizer.bypassSecurityTrustHtml(this.contact.details.address);
        this.button_1_text = this.contact['details']['button_1_text'];
        this.button_2_text = this.contact['details']['button_2_text'];
        this.address = this.sanitizer.bypassSecurityTrustHtml(this.contact.details.address);
        this.button_2_link = this.contact['details']['button_2_link'];
        this.locations = this.contact['details']['locations'];
        this.enquiryheading = this.contact['enquiry_details']['heading'];
        this.enquiryleft_content = this.sanitizer.bypassSecurityTrustHtml(this.contact['enquiry_details']['left_content']);
        this.enquiryright_content = this.sanitizer.bypassSecurityTrustHtml(this.contact['enquiry_details']['right_content']);
        this.img1 = this.contact['enquiry_details']['images'][0]['image'];
        this.img2 = this.contact['enquiry_details']['images'][1]['image'];
        this.img3 = this.contact['enquiry_details']['images'][2]['image'];
        this.img4 = this.contact['enquiry_details']['images'][3]['image'];
        console.log("enquiryimgs", this.img1);
        console.log(this.contact.details.button_2_link, "button_2_link")
        this.MetaTags();
      }
    });
  }

  
  onSubmit() {
    this.loading = true;
    let myFormValue = this.career.value;
    console.log(myFormValue, 'myFormData');

    this.apiCall.contactForm(myFormValue).subscribe(data => {
      this.loading = false;
      if (data['response'] == 200) {
        this.career.reset();
      }
      console.log(data, "contact");
    });
  }

  MetaTags() {
    let slug = this.contact.details.slug;
    let dataReq = {
      "page": "contactus",
      "id": slug
    }
    console.log("slug", dataReq);
    let url = this.router.url
    this.meta.getProduct(dataReq).subscribe(data => {
      this.meta.updateMetaTags(data['seodata'], url);
      this.loading = false;
    });
  }
}

