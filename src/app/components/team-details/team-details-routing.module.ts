import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamDetailsComponent } from './team-details.component';
import { DoctorlistResolver } from '../../common/resolver/doctorlist-resolver.service';


const routes: Routes = [{ path: ':slug', component: TeamDetailsComponent, resolve: {
  doctor: DoctorlistResolver
} }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [DoctorlistResolver] 
})
export class TeamDetailsRoutingModule { }
