import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VacationBoardingComponent } from './vacation-boarding.component';
import { VacationBoardingResolver } from '../../common/resolver/vacation-boarding-resolver.service';

const routes: Routes = [{ path: '', component: VacationBoardingComponent, resolve: {
  vacationdata: VacationBoardingResolver
} }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [VacationBoardingResolver]
})
export class VacationBoardingRoutingModule { }
