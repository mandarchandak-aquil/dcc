import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from 'src/app/layout/layout.module';
import { PrivacyPolicyRoutingModule } from './privacy-policy-routing.module';
import { PrivacyPolicyComponent } from './privacy-policy.component';



@NgModule({
  declarations: [PrivacyPolicyComponent],
  imports: [
    CommonModule,
    PrivacyPolicyRoutingModule,
    LayoutModule
  ]
})
export class PrivacyPolicyModule { }
