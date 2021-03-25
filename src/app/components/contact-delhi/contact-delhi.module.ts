import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutModule} from "../../layout/layout.module";
import { ContactDelhiRoutingModule } from './contact-delhi-routing.module';
import { ContactDelhiComponent } from './contact-delhi.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {  ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [ContactDelhiComponent],
  imports: [
    CommonModule,
    ContactDelhiRoutingModule,
    LayoutModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class ContactDelhiModule { }
