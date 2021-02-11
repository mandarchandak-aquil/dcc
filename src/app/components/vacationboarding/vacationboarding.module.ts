import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VacationboardingRoutingModule } from './vacationboarding-routing.module';
import { VacationboardingComponent } from './vacationboarding.component';


@NgModule({
  declarations: [VacationboardingComponent],
  imports: [
    CommonModule,
    VacationboardingRoutingModule
  ]
})
export class VacationboardingModule { }
