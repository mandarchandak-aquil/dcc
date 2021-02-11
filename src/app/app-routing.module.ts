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
      { 
        path: 'aboutus', 
        loadChildren: () => import('./components/aboutus/aboutus.module').then(m => m.AboutusModule) 
      },
      { 
        path: 'ourservices', 
        loadChildren: () => import('./components/ourservices/ourservices.module').then(m => m.OurservicesModule) 
      },
      { 
        path: 'ourteam', 
        loadChildren: () => import('./components/ourteam/ourteam.module').then(m => m.OurteamModule) 
      },
      { 
        path: 'vacationboarding', 
        loadChildren: () => import('./components/vacationboarding/vacationboarding.module').then(m => m.VacationboardingModule) 
      },    
  { path: 'media', loadChildren: () => import('./components/media/media.module').then(m => m.MediaModule) },
  { path: 'careers', loadChildren: () => import('./components/careers/careers.module').then(m => m.CareersModule) },
  { path: 'page-not-found', loadChildren: () => import('./components/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) },
  { path: 'Contact-delhi', loadChildren: () => import('./components/contact-delhi/contact-delhi.module').then(m => m.ContactDelhiModule) },
  { path: 'Contact-Gurgaon', loadChildren: () => import('./components/contact-gurgaon/contact-gurgaon.module').then(m => m.ContactGurgaonModule) },
  { path: 'Pet-Health', loadChildren: () => import('./components/pet-health/pet-health.module').then(m => m.PetHealthModule) },
  { path: 'Team-Details', loadChildren: () => import('./components/team-details/team-details.module').then(m => m.TeamDetailsModule) },
  { path: 'Team-List', loadChildren: () => import('./components/team-list/team-list.module').then(m => m.TeamListModule) },
  { path: 'vacation-boarding', loadChildren: () => import('./components/vacation-boarding/vacation-boarding.module').then(m => m.VacationBoardingModule) },
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
  
  { path: '**', redirectTo: '404-error', pathMatch: 'full' },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule],
  providers: [HeaderResolver, FooterResolver]
})
export class AppRoutingModule { }
