import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurveyFeedbackPage } from './survey-feedback.page';

const routes: Routes = [
  {
    path: '',
    component: SurveyFeedbackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurveyFeedbackPageRoutingModule {}
