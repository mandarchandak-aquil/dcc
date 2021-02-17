import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VacationboardingComponent } from './vacationboarding.component';

const routes: Routes = [{ path: '', component: VacationboardingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacationboardingRoutingModule { }
