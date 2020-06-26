import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestItemPage } from './test-item.page';

const routes: Routes = [
  {
    path: '',
    component: TestItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestItemPageRoutingModule {}
