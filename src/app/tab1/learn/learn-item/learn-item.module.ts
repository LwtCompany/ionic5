import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LearnItemPageRoutingModule } from './learn-item-routing.module';

import { LearnItemPage } from './learn-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LearnItemPageRoutingModule
  ],
  declarations: [LearnItemPage]
})
export class LearnItemPageModule {}
