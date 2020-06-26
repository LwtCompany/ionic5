import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LearnPageRoutingModule } from './learn-routing.module';

import { LearnPage } from './learn.page';

import { NgbRatingModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { ModalItemPage} from './modal-item/modal-item.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LearnPageRoutingModule,
    NgbRatingModule,
    NgbCollapseModule

  ],
  declarations: [LearnPage,ModalItemPage],

  entryComponents: [ModalItemPage]
})
export class LearnPageModule {}
