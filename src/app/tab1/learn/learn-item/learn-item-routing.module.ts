import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LearnItemPage } from './learn-item.page';

const routes: Routes = [
  {
    path: '',
    component: LearnItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearnItemPageRoutingModule {}
