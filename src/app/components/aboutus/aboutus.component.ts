import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
// import * as $ from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';
import { MetaServiceService } from '../../common/meta-service.service';
import { CommonService } from '../../common/services/common/common.service';
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css', "../../common/style.css"]
})
export class AboutusComponent implements OnInit {
  loading :boolean = true;  
  slideConfig = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,      
    speed: 1000,
    autoplaySpeed: 8000,
    dots:true,
    centerMode: true, 
    adaptiveHeight: false,
    responsive: [  {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,       
      }
    }]
  };

 slides : any =[];
 
  public aboutData : any;
  heading: any;
  content:any;
  advisorheading: any;
  advisorcontent: any;
  advisors:any = [];
  missionheading: any;
  missioncontent: any;
  mission: any = [];
  visionheading: any;
  visioncontent: any;
  vision: any = [];
  valueheading: any;
  valuecontent: any;
  value: any = [];
  valueicons: any = [];
  testimonialheading: any;
  testimonial: any = [];
  testimonialcontent: any;
  technologyheading: any;
  technologycontent: any;
  technology: any =[];
  softwareheading: any;
  softwarecontent: any;
  software: any = [];
  supportheading: any;
  supportcontent: any;
  support: any =[];
  supporticon: any = [];
  footersection: any;
  constructor(private sanitizer: DomSanitizer,public apiCall : CommonService, private meta : MetaServiceService, public router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getDataInit();
    this.MetaTags();   
   
  }

  getDataInit(){
    let dataReq = {
      "pagename": "about us"
  }

  this.apiCall.aboutData(dataReq).subscribe(data => {

    if(data){
      this.aboutData = data;
      console.log(this.aboutData,"this.aboutData")
      this.heading =  this.sanitizer.bypassSecurityTrustHtml(this.aboutData['topsection']['heading']);
      this.content =  this.sanitizer.bypassSecurityTrustHtml(this.aboutData['topsection']['content']);
      this.advisorheading =  this.sanitizer.bypassSecurityTrustHtml(this.aboutData['ouradvisorssection']['heading']);
      this.advisorcontent =  this.sanitizer.bypassSecurityTrustHtml(this.aboutData['ouradvisorssection']['content']);
      this.advisors = this.aboutData['ouradvisorssection']['advisors'];
      this.missionheading =  this.sanitizer.bypassSecurityTrustHtml(this.aboutData['ourmissionsection']['heading']);
      this.missioncontent =  this.sanitizer.bypassSecurityTrustHtml(this.aboutData['ourmissionsection']['content']);
      this.mission = this.aboutData['ourmissionsection'];
      this.visionheading =  this.sanitizer.bypassSecurityTrustHtml(this.aboutData['ourvisionsection']['heading']);
      this.visioncontent =  this.sanitizer.bypassSecurityTrustHtml(this.aboutData['ourvisionsection']['content']);
      this.vision = this.aboutData['ourvisionsection'];
      this.valueheading =  this.sanitizer.bypassSecurityTrustHtml(this.aboutData['ourvaluessection']['heading']);
      this.valuecontent =  this.sanitizer.bypassSecurityTrustHtml(this.aboutData['ourvaluessection']['content']);
      this.value = this.aboutData['ourvaluessection'];
      this.valueicons = this.aboutData['ourvaluessection']['icons'];
      this.testimonialheading =  this.sanitizer.bypassSecurityTrustHtml(this.aboutData['testimonialssection']['heading']);   
      this.testimonial = this.aboutData['testimonialssection']['testimonials'];
      this.technologyheading =  this.sanitizer.bypassSecurityTrustHtml(this.aboutData['ourtechnologiessection']['heading']);
      this.technologycontent =  this.sanitizer.bypassSecurityTrustHtml(this.aboutData['ourtechnologiessection']['content']);
      this.technology = this.aboutData['ourtechnologiessection'];
      this.softwareheading =  this.sanitizer.bypassSecurityTrustHtml(this.aboutData['oursoftwaresections']['heading']);
      this.softwarecontent =  this.sanitizer.bypassSecurityTrustHtml(this.aboutData['oursoftwaresections']['content']);
      this.software = this.aboutData['oursoftwaresections'];
      this.supportheading =  this.sanitizer.bypassSecurityTrustHtml(this.aboutData['oursupportsections']['heading']);
      this.supportcontent =  this.sanitizer.bypassSecurityTrustHtml(this.aboutData['oursupportsections']['content']);
      this.support = this.aboutData['oursupportsections'];
      this.supporticon = this.aboutData['oursupportsections']['icons'];
      this.slides  = this.aboutData.testimonialssection.testimonials;
      this.footersection = JSON.stringify(this.aboutData['footersection']);
    }
   
});


    
  }

  getContent(param:any){
    this.testimonialcontent = this.sanitizer.bypassSecurityTrustHtml(param);   
  }
  MetaTags(){
    let dataReq = {
      "page": "about",
      "id": ""
    }
    this.meta.getProduct(dataReq).subscribe(data => {
        this.meta.updateMetaTags(data['seodata']);
        this.loading = false;
    });
  }
  

}
