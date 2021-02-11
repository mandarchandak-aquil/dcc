import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VacationBoardingComponent } from './vacation-boarding.component';

const routes: Routes = [{ path: '', component: VacationBoardingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacationBoardingRoutingModule { }
