import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutModule} from "../../layout/layout.module";
import { ContactDelhiRoutingModule } from './contact-delhi-routing.module';
import { ContactDelhiComponent } from './contact-delhi.component';


@NgModule({
  declarations: [ContactDelhiComponent],
  imports: [
    CommonModule,
    ContactDelhiRoutingModule,
    LayoutModule
  ]
})
export class ContactDelhiModule { }
