import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public footerData: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.footerData = this.route.snapshot.data['footerData'];
    console.log(this.footerData, "footerData");
  }

}
