import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactDelhiComponent } from './contact-delhi.component';

const routes: Routes = [{ path: '', component: ContactDelhiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactDelhiRoutingModule { }
