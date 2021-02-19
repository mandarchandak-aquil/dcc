import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'app-footer-top',
  templateUrl: './footer-top.component.html',
  styleUrls: ['./footer-top.component.css']
})
export class FooterTopComponent implements OnInit {

  @Input() dataString: any;
  footersection : any
  heading: any;
  content: any;
  showfooterTop : boolean = false;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    console.log(this.dataString,'dataString')
    if(this.dataString){
      this.showfooterTop = true
      this.footersection = JSON.parse(this.dataString)
      console.log(this.footersection, "footersection footersection");
      this.heading =  this.sanitizer.bypassSecurityTrustHtml(this.footersection['heading']);
      this.content = this.sanitizer.bypassSecurityTrustHtml(this.footersection['content']);
    }else{
      this.showfooterTop = false
    }
    
  }

}
