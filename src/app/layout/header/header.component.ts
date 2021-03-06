import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../../common/services/common/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public headerData: any;

  constructor(public router: Router, public apiCall: CommonService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getDataInit();
  }

  getDataInit() {
    let dataReq = {
      "pagename": "header"
    }
    this.apiCall.headerData(dataReq).subscribe(data => {
      if (data) {
        this.headerData = data;
        console.log(this.headerData, "headerData");
      }
    });
  }
}
