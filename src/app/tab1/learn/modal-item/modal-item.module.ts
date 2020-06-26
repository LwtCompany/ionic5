import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalItemPageRoutingModule } from './modal-item-routing.module';

import { ModalItemPage } from './modal-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalItemPageRoutingModule
  ],
  declarations: [ModalItemPage]
})
export class ModalItemPageModule {}
