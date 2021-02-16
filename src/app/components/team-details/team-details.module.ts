import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutModule} from "../../layout/layout.module";
import { TeamDetailsRoutingModule } from './team-details-routing.module';
import { TeamDetailsComponent } from './team-details.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [TeamDetailsComponent],
  imports: [
    CommonModule,
    TeamDetailsRoutingModule,
    LayoutModule,
    NgbModule
  ]
})
export class TeamDetailsModule { }
