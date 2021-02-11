import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactGurgaonComponent } from './contact-gurgaon.component';

const routes: Routes = [{ path: '', component: ContactGurgaonComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactGurgaonRoutingModule { }
