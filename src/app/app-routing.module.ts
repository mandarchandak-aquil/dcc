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
      { path: 'page-not-found', loadChildren: () => import('./components/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) },
    ],
    resolve: {
      headerData: HeaderResolver,
      footerData: FooterResolver
    }
  },
  { path: 'wp-admin', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: 'page-not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled', scrollPositionRestoration: 'enabled', onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule],
  providers: [HeaderResolver, FooterResolver]
})
export class AppRoutingModule { }
