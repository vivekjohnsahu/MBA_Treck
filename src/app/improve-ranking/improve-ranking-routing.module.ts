import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImproveRankingPage } from './improve-ranking.page';

const routes: Routes = [
  {
    path: '',
    component: ImproveRankingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImproveRankingPageRoutingModule {}
