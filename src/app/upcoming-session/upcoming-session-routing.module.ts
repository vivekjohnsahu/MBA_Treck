import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpcomingSessionPage } from './upcoming-session.page';

const routes: Routes = [
  {
    path: '',
    component: UpcomingSessionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpcomingSessionPageRoutingModule {}
