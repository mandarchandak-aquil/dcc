import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './layout/auth/auth.component';

import { HeaderResolver } from './common/resolver/header-resolver.service';
import { FooterResolver } from './common/resolver/footer-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { 
        path: '', 
        loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) 
      },
      
    ],
    resolve: {
      headerData: HeaderResolver, 
      footerData: FooterResolver
    }
  },
  { 
    path: '404-error', 
    loadChildren: () => import('./components/page404/page404.module').then(m => m.Page404Module) 
  },
  { path: '**', redirectTo: '404-error', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [HeaderResolver, FooterResolver]
})
export class AppRoutingModule { }
