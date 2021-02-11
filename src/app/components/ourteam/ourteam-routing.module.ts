import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurteamComponent } from './ourteam.component';
import { TeamsResolver } from '../../common/resolver/teams-resolver.service';

const routes: Routes = [{ path: '', component: OurteamComponent, resolve: {
  teamsdata: TeamsResolver
} }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [TeamsResolver] 
})
export class OurteamRoutingModule { }
