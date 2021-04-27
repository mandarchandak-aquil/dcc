import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './layout/auth/auth.component';


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
        path: 'about-dccpets',
        loadChildren: () => import('./components/aboutus/aboutus.module').then(m => m.AboutusModule)
      },
      {
        path: 'DCC-pet-services',
        loadChildren: () => import('./components/ourservices/ourservices.module').then(m => m.OurservicesModule)
      },
      {
        path: 'our-pet-care-doctors',
        loadChildren: () => import('./components/ourteam/ourteam.module').then(m => m.OurteamModule)
      },
      {
        path: 'media',
        loadChildren: () => import('./components/media/media.module').then(m => m.MediaModule)
      },
      {
        path: 'careers',
        loadChildren: () => import('./components/careers/careers.module').then(m => m.CareersModule)
      },
      {
        path: 'contact-us',
        loadChildren: () => import('./components/contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'contact-us',
        loadChildren: () => import('./components/contact-delhi/contact-delhi.module').then(m => m.ContactDelhiModule)
      },
      {
        path: 'our-pet-care-doctors',
        loadChildren: () => import('./components/team-details/team-details.module').then(m => m.TeamDetailsModule)
      },
      {
        path: 'DCC-pet-services',
        loadChildren: () => import('./components/vacation-boarding/vacation-boarding.module').then(m => m.VacationBoardingModule)
      },
      { 
        path: 'privacy-policy', 
        loadChildren: () => import('./components/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule) 
      },
      { 
        path: 'refund-policy',
        loadChildren: () => import('./components/refund-policy/refund-policy.module').then(m => m.RefundPolicyModule)
      },
      { 
        path: 'terms-and-conditions', 
        loadChildren: () => import('./components/terms-and-conditions/terms-and-conditions.module').then(m => m.TermsAndConditionsModule) 
      },
      { path: 'page-not-found', loadChildren: () => import('./components/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) },
    ],
    
  },
  { path: 'wp-admin', redirectTo: '/', pathMatch: 'full' },
  { path:'case-study-tag/transportation', redirectTo: '/', pathMatch: 'full' },
  { path:'case-study-tag/shipping', redirectTo: '/', pathMatch: 'full' },
  { path:'case-study-category/security', redirectTo: '/', pathMatch: 'full' },
  { path:'case-study/financials-need-for-strategic-advisor', redirectTo: '/', pathMatch: 'full' },
  { path:'tag/organization', redirectTo: '/', pathMatch: 'full' },
  { path:'tag/business', redirectTo: '/', pathMatch: 'full' },
  { path:'tag/employee', redirectTo: '/', pathMatch: 'full' },
  { path:'pet-care-blog/lorem-ipsum-is-simply-dummy-text-of', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: 'page-not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled', scrollPositionRestoration: 'enabled', onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
