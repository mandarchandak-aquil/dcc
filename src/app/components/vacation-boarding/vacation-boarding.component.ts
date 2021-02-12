import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vacation-boarding',
  templateUrl: './vacation-boarding.component.html',
  styleUrls: ['./vacation-boarding.component.css']
})
export class VacationBoardingComponent implements OnInit {
  public vacationdata : any;
  heading: any;
  left_content: any;
  right_content: any;
  footersection : any;
  left_content_bottom: any;
  right_content_bottom: any;
  faqheading: any;

  constructor(private sanitizer: DomSanitizer, public router: Router, private route: ActivatedRoute) { }
  ngOnInit() {
    this.vacationdata = this.route.snapshot.data['vacationdata'];    
    console.log("this.vacationdata",this.vacationdata);
    this.heading =  this.sanitizer.bypassSecurityTrustHtml(this.vacationdata['details']['heading']);
    this.left_content = this.sanitizer.bypassSecurityTrustHtml(this.vacationdata['details']['left_content']);
    this.right_content = this.sanitizer.bypassSecurityTrustHtml(this.vacationdata['details']['right_content']);
    this.footersection = JSON.stringify(this.vacationdata['footersection']);
    this.left_content_bottom = this.sanitizer.bypassSecurityTrustHtml(this.vacationdata['details']['left_content_bottom']);
    this.right_content_bottom = this.sanitizer.bypassSecurityTrustHtml(this.vacationdata['details']['right_content_bottom']);
    this.faqheading = this.sanitizer.bypassSecurityTrustHtml(this.vacationdata['faqsection']['heading']);
    
  }

}
