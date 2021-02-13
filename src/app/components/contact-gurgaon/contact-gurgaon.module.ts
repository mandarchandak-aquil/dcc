import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutModule} from "../../layout/layout.module";
import { ContactGurgaonRoutingModule } from './contact-gurgaon-routing.module';
import { ContactGurgaonComponent } from './contact-gurgaon.component';


@NgModule({
  declarations: [ContactGurgaonComponent],
  imports: [
    CommonModule,
    ContactGurgaonRoutingModule,
    LayoutModule
  ]
})
export class ContactGurgaonModule { }
