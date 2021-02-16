import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutusComponent } from './aboutus.component';

// import { AboutdccResolver } from '../../common/resolver/aboutdcc-resolver.service';

const routes: Routes = [{ 
  path: '', 
  component: AboutusComponent,
  // resolve: {
  //   aboutData: AboutdccResolver
  // }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  // providers: [AboutdccResolver] 
})
export class AboutusRoutingModule { }
