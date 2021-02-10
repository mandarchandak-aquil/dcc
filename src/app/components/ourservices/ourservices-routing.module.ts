import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurservicesComponent } from './ourservices.component';

const routes: Routes = [{ path: '', component: OurservicesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurservicesRoutingModule { }
