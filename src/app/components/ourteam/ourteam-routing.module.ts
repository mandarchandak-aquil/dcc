import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurteamComponent } from './ourteam.component';

const routes: Routes = [{ path: '', component: OurteamComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurteamRoutingModule { }
