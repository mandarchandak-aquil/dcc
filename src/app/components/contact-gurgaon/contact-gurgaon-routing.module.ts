import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactGurgaonComponent } from './contact-gurgaon.component';
// import { ContactgurgaonResolver } from '../../common/resolver/contactgurgaon-resolver.service';
const routes: Routes = [{ path: '', component: ContactGurgaonComponent,
// resolve: {
//   contact: ContactgurgaonResolver
// }
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  // providers: [ContactgurgaonResolver] 
})
export class ContactGurgaonRoutingModule { }
