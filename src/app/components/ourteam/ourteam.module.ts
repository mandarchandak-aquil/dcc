import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurteamRoutingModule } from './ourteam-routing.module';
import { OurteamComponent } from './ourteam.component';


@NgModule({
  declarations: [OurteamComponent],
  imports: [
    CommonModule,
    OurteamRoutingModule
  ]
})
export class OurteamModule { }
