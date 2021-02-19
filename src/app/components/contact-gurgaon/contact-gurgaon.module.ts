import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutModule} from "../../layout/layout.module";
import { ContactGurgaonRoutingModule } from './contact-gurgaon-routing.module';
import { ContactGurgaonComponent } from './contact-gurgaon.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ContactGurgaonComponent],
  imports: [
    CommonModule,
    ContactGurgaonRoutingModule,
    LayoutModule,
    NgbModule
  ]
})
export class ContactGurgaonModule { }
