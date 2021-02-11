import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactDelhiRoutingModule } from './contact-delhi-routing.module';
import { ContactDelhiComponent } from './contact-delhi.component';


@NgModule({
  declarations: [ContactDelhiComponent],
  imports: [
    CommonModule,
    ContactDelhiRoutingModule
  ]
})
export class ContactDelhiModule { }
