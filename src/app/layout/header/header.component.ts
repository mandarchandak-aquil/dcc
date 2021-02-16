import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public headerData: any;

  constructor(public router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.headerData = this.route.snapshot.data['headerData'];
    console.log(this.headerData, "headerData");    
  }

}
