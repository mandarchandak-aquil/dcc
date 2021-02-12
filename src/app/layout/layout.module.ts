import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {  ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FooterTopComponent } from './footer-top/footer-top.component';

@NgModule({
imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
],
exports: [
    HeaderComponent,
    FooterComponent,
    FooterTopComponent,
],
declarations: [
    HeaderComponent,
    FooterComponent,
    FooterTopComponent,
]
})
export class LayoutModule { 

}