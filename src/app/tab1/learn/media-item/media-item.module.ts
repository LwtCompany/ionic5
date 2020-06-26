import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MediaItemPageRoutingModule } from './media-item-routing.module';

import { MediaItemPage } from './media-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MediaItemPageRoutingModule
  ],
  declarations: [MediaItemPage]
})
export class MediaItemPageModule {}
