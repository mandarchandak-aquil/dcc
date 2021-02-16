import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MediaComponent } from './media.component';
// import { MediaResolver } from '../../common/resolver/media-resolver.service';

const routes: Routes = [{ path: '', component: MediaComponent,
  // resolve: {
  //   medianewspage: MediaResolver
  // }
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  // providers: [MediaResolver] 
})
export class MediaRoutingModule { }
