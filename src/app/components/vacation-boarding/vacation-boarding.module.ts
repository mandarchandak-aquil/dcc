import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {LayoutModule} from "../../layout/layout.module";

import { VacationBoardingRoutingModule } from './vacation-boarding-routing.module';
import { VacationBoardingComponent } from './vacation-boarding.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [VacationBoardingComponent],
  imports: [
    CommonModule,
    VacationBoardingRoutingModule,
    LayoutModule,
    NgbAccordionModule,
    NgbModule
  ]
})
export class VacationBoardingModule { }
