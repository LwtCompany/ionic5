import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LearnPage } from './learn.page';

const routes: Routes = [
  {
    path: '',
    component: LearnPage
  },
  {
    path: 'learn-item',
    loadChildren: () => import('./learn-item/learn-item.module').then( m => m.LearnItemPageModule)
  },
  {
    path: 'test-item',
    loadChildren: () => import('./test-item/test-item.module').then( m => m.TestItemPageModule)
  },
  {
    path: 'modal-item',
    loadChildren: () => import('./modal-item/modal-item.module').then( m => m.ModalItemPageModule)
  },
  {
    path: 'media-item',
    loadChildren: () => import('./media-item/media-item.module').then( m => m.MediaItemPageModule)
  },
 



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearnPageRoutingModule {}
