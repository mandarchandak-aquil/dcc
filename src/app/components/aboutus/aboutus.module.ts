import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AboutusRoutingModule } from './aboutus-routing.module';
import { AboutusComponent } from './aboutus.component';


@NgModule({
  declarations: [AboutusComponent],
  imports: [
    CommonModule,
    AboutusRoutingModule,
    NgbModule,
    SlickCarouselModule
  ]
})
export class AboutusModule { }
