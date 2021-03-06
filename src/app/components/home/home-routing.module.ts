import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

// import { HomeResolver } from '../../common/resolver/home-resolver.service';

const routes: Routes = [{ 
  path: '', 
  component: HomeComponent,
  // resolve: {
  //   homepage: HomeResolver
  // }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  // providers: [HomeResolver] 
})
export class HomeRoutingModule { }
