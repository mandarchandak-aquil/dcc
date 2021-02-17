import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetHealthComponent } from './pet-health.component';

const routes: Routes = [{ path: '', component: PetHealthComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetHealthRoutingModule { }
