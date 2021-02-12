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

  constructor(private sanitizer: DomSanitizer, public router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.aboutData = this.route.snapshot.data['aboutData'];
    console.log(this.aboutData,"this.aboutData")
  }

  

}
