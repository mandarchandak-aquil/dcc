import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { MetaServiceService } from '../../common/meta-service.service';
import { CommonService } from '../../common/services/common/common.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  loading :boolean = true; 
  public mediadata: any;
  heading: any;
  left_content: any;
  right_content: any;
  medianews: any = [];
  footersection : any;
  
  constructor(private sanitizer: DomSanitizer,public apiCall : CommonService, private meta : MetaServiceService, public router: Router, private route: ActivatedRoute) { }
  ngOnInit() {
    this.getDataInit();
    this.MetaTags();    
  }


  getDataInit(){
    this.loading = true;
    let dataReq = {
      "pagename": "Media and News"
    }
    this.apiCall.mediaData(dataReq).subscribe(data => {
      if(data){
        this.mediadata = data;
        this.heading =  this.sanitizer.bypassSecurityTrustHtml(this.mediadata['details']['heading']);
        this.left_content = this.sanitizer.bypassSecurityTrustHtml(this.mediadata['details']['left_content']);
        this.right_content = this.sanitizer.bypassSecurityTrustHtml(this.mediadata['details']['right_content']);
        this.medianews = this.mediadata['mediaandnews'];
        console.log(this.mediadata, "mediadata"); 
        this.footersection = JSON.stringify(this.mediadata['footersection']);
        console.log("footerd",this.footersection);
        this.loading = false;
      }   
    });    
  }
  MetaTags(){
    let dataReq = {
      "page": "media",
      "id": ""
    }
    this.meta.getProduct(dataReq).subscribe(data => {
      let url = this.router.url
      this.meta.updateMetaTags(data['seodata'],url);
        
    });
  }

}
