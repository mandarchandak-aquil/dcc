import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
// import * as $ from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css', "../../common/style.css"]
})
export class AboutusComponent implements OnInit {

  slideConfig = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,      
    speed: 1000,
    autoplaySpeed: 8000,
    dots:true,
    centerMode: true, 
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll:1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1,
        }
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  // slideConfig = {
  //   "slidesToShow": 4,
  //   "slidesToScroll": 4,
  //   "dots": true,
  //   "infinite": true,
  //   'autoplay': false,
  //   'speed': 1000,
  //   'autoplaySpeed': 1000,
  //   'centerPadding': '0',
  //   'useTransform': true,
  //   'cssEase': 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
  // };

  slides = [342, 453, 846, 855, 234, 564, 744, 243];

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
  constructor(private sanitizer: DomSanitizer, public router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.aboutData = this.route.snapshot.data['aboutData'];
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
    console.log("advisors",this.technology);
  }

  getContent(param:any){
    this.testimonialcontent = this.sanitizer.bypassSecurityTrustHtml(param);   
  }
  

}
