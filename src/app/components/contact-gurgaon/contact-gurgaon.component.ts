
import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
// import * as $ from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-contact-gurgaon',
  templateUrl: './contact-gurgaon.component.html',
  styleUrls: ['./contact-gurgaon.component.css']
})
export class ContactGurgaonComponent implements OnInit {
  contact :any =[];
  contacts :any;
  footersection: any = [];
  constructor( private sanitizer: DomSanitizer, public router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.contact = this.route.snapshot.data['contact'];
   this.contacts =  this.sanitizer.bypassSecurityTrustHtml(this.contact.details.contacts);
    console.log(this.contacts, "contact");   
    this.footersection = JSON.stringify(this.contact['footersection']) 
  }

}
