import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VacationBoardingRoutingModule } from './vacation-boarding-routing.module';
import { VacationBoardingComponent } from './vacation-boarding.component';


@NgModule({
  declarations: [VacationBoardingComponent],
  imports: [
    CommonModule,
    VacationBoardingRoutingModule
  ]
})
export class VacationBoardingModule { }
