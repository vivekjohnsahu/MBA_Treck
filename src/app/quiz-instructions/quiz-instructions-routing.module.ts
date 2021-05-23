import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizInstructionsPage } from './quiz-instructions.page';

const routes: Routes = [
  {
    path: '',
    component: QuizInstructionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizInstructionsPageRoutingModule {}
