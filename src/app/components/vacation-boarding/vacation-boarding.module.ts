import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {LayoutModule} from "../../layout/layout.module";

import { VacationBoardingRoutingModule } from './vacation-boarding-routing.module';
import { VacationBoardingComponent } from './vacation-boarding.component';


@NgModule({
  declarations: [VacationBoardingComponent],
  imports: [
    CommonModule,
    VacationBoardingRoutingModule,
    LayoutModule
  ]
})
export class VacationBoardingModule { }
