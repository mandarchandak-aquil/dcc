import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutModule} from "../../layout/layout.module";
import { MediaRoutingModule } from './media-routing.module';
import { MediaComponent } from './media.component';



@NgModule({
  declarations: [MediaComponent],
  imports: [
    CommonModule,
    MediaRoutingModule,
    LayoutModule
  ]
})
export class MediaModule { }
