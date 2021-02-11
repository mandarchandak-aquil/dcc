import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetHealthRoutingModule } from './pet-health-routing.module';
import { PetHealthComponent } from './pet-health.component';


@NgModule({
  declarations: [PetHealthComponent],
  imports: [
    CommonModule,
    PetHealthRoutingModule
  ]
})
export class PetHealthModule { }
