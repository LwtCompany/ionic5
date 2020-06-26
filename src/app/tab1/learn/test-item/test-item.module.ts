import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestItemPageRoutingModule } from './test-item-routing.module';

import { TestItemPage } from './test-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestItemPageRoutingModule
  ],
  declarations: [TestItemPage]
})
export class TestItemPageModule {}
