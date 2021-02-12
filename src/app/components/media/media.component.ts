import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  public mediadata: any;

  constructor(private sanitizer: DomSanitizer, public router: Router, private route: ActivatedRoute) { }
  ngOnInit() {
    this.mediadata = this.route.snapshot.data['medianewspage'];
    console.log(this.mediadata, "mediadata"); 
  }

}
