import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EarnPointsPage } from './earn-points.page';

const routes: Routes = [
  {
    path: '',
    component: EarnPointsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EarnPointsPageRoutingModule {}
