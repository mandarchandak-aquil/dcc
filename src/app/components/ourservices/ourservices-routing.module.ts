import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurservicesComponent } from './ourservices.component';
// import { ServicesResolver } from '../../common/resolver/services-resolver.service';

const routes: Routes = [{ path: '', component: OurservicesComponent, 
// resolve: {
//   servicedata: ServicesResolver
// } 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  // providers: [ServicesResolver] 
})
export class OurservicesRoutingModule { }
