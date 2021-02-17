import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutModule} from "../../layout/layout.module";
import { OurteamRoutingModule } from './ourteam-routing.module';
import { OurteamComponent } from './ourteam.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [OurteamComponent],
  imports: [
    CommonModule,
    OurteamRoutingModule,
    LayoutModule,
    NgbModule
  ]
})
export class OurteamModule { }
