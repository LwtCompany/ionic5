import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalItemPage } from './modal-item.page';

const routes: Routes = [
  {
    path: '',
    component: ModalItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalItemPageRoutingModule {}
