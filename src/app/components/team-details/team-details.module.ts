import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamDetailsRoutingModule } from './team-details-routing.module';
import { TeamDetailsComponent } from './team-details.component';


@NgModule({
  declarations: [TeamDetailsComponent],
  imports: [
    CommonModule,
    TeamDetailsRoutingModule
  ]
})
export class TeamDetailsModule { }
