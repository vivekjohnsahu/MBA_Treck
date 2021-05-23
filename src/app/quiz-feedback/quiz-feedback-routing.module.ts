import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizFeedbackPage } from './quiz-feedback.page';

const routes: Routes = [
  {
    path: '',
    component: QuizFeedbackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizFeedbackPageRoutingModule {}
