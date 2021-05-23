import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImproveRankProductPage } from './improve-rank-product.page';

const routes: Routes = [
  {
    path: '',
    component: ImproveRankProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImproveRankProductPageRoutingModule {}
