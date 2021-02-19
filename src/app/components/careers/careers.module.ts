import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutModule} from "../../layout/layout.module";
import { CareersRoutingModule } from './careers-routing.module';
import { CareersComponent } from './careers.component';
import {  ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CareersComponent],
  imports: [
    CommonModule,
    CareersRoutingModule,
    ReactiveFormsModule,
    LayoutModule
  ]
})
export class CareersModule { }
