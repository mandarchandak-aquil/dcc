import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
// import * as $ from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ourteam',
  templateUrl: './ourteam.component.html',
  styleUrls: ['./ourteam.component.css']
})
export class OurteamComponent implements OnInit {

  public teamsdata:any;
  heading: any;
  content: any;
  constructor(private sanitizer: DomSanitizer, public router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.teamsdata = this.route.snapshot.data['teamsdata'];
    console.log(this.teamsdata, "teamsdata");    
    this.heading =  this.sanitizer.bypassSecurityTrustHtml(this.teamsdata['details']['heading']);
    this.content = this.sanitizer.bypassSecurityTrustHtml(this.teamsdata['details']['content']);
  }

}
