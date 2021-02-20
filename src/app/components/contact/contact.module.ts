import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutModule} from "../../layout/layout.module";
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    NgbModule,
    LayoutModule
  ]
})
export class ContactModule { }
