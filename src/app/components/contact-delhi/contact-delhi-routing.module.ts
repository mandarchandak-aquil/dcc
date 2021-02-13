import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactDelhiComponent } from './contact-delhi.component';
import { ContactdelhiResolver } from '../../common/resolver/contactdelhi-resolver.service';
const routes: Routes = [{ path: '', component: ContactDelhiComponent,
resolve: {
  contact: ContactdelhiResolver
}
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ContactdelhiResolver] 
})
export class ContactDelhiRoutingModule { }
