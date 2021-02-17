import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CareersComponent } from './careers.component';
// import { CareerResolver } from '../../common/resolver/career-resolver.service';
const routes: Routes = [{ path: '', component: CareersComponent,
// resolve: {
//   contact: CareerResolver
// } 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  // providers: [CareerResolver] 
})
export class CareersRoutingModule { }
