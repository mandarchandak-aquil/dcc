
import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
// import * as $ from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';
import { MetaServiceService } from '../../common/meta-service.service';
@Component({
  selector: 'app-contact-gurgaon',
  templateUrl: './contact-gurgaon.component.html',
  styleUrls: ['./contact-gurgaon.component.css']
})
export class ContactGurgaonComponent implements OnInit {
  loading :boolean = true;
  contact :any =[];
  contacts :any;
  footersection: any = [];
  constructor( private sanitizer: DomSanitizer,private meta : MetaServiceService, public router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
   
    this.contact = this.route.snapshot.data['contact'];
   this.contacts =  this.sanitizer.bypassSecurityTrustHtml(this.contact.details.contacts);
    console.log(this.contacts, "contact");   
    this.footersection = JSON.stringify(this.contact['footersection']) 
    this.MetaTags();
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
