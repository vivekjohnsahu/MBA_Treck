import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JourneyMapPage } from './journey-map.page';

const routes: Routes = [
  {
    path: '',
    component: JourneyMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JourneyMapPageRoutingModule {}
