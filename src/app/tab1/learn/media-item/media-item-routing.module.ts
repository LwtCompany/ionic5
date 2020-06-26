import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MediaItemPage } from './media-item.page';

const routes: Routes = [
  {
    path: '',
    component: MediaItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MediaItemPageRoutingModule {}
