import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpcomingSession2Page } from './upcoming-session2.page';

const routes: Routes = [
  {
    path: '',
    component: UpcomingSession2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpcomingSession2PageRoutingModule {}
