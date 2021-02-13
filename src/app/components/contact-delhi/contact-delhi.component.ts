import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
// import * as $ from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-contact-delhi',
  templateUrl: './contact-delhi.component.html',
  styleUrls: ['./contact-delhi.component.css']
})
export class ContactDelhiComponent implements OnInit {
  contact : any = [];
  contacts :any;
  footersection: any;
  constructor( private sanitizer: DomSanitizer, public router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.contact = this.route.snapshot.data['contact'];
    this.contacts = this.sanitizer.bypassSecurityTrustHtml(this.contact.details.contacts);
     console.log(this.contact, "contact");    
     this.footersection = JSON.stringify(this.contact['footersection']);   
  }

}
