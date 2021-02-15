import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutModule} from "../../layout/layout.module";
import { TeamDetailsRoutingModule } from './team-details-routing.module';
import { TeamDetailsComponent } from './team-details.component';


@NgModule({
  declarations: [TeamDetailsComponent],
  imports: [
    CommonModule,
    TeamDetailsRoutingModule,
    LayoutModule
  ]
})
export class TeamDetailsModule { }
