import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public footerData: any;
  address:any;
  phone:any;
  timing:any;
  footerlogocontent:any;

  constructor(private route: ActivatedRoute,private sanitizer: DomSanitizer,) { }

  ngOnInit() {
    this.footerData = this.route.snapshot.data['footerData'];
    console.log(this.footerData, "footerData");
    
     this.address = this.sanitizer.bypassSecurityTrustHtml(this.footerData['details']['address']);
     this.phone = this.sanitizer.bypassSecurityTrustHtml(this.footerData['details']['phone']);
     this.timing = this.sanitizer.bypassSecurityTrustHtml(this.footerData['details']['timing']);
     this.footerlogocontent = this.sanitizer.bypassSecurityTrustHtml(this.footerData['details']['footerlogocontent']);

   
  }

}
