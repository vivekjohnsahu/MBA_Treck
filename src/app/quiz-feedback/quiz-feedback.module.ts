import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizFeedbackPageRoutingModule } from './quiz-feedback-routing.module';

import { QuizFeedbackPage } from './quiz-feedback.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizFeedbackPageRoutingModule
  ],
  declarations: [QuizFeedbackPage]
})
export class QuizFeedbackPageModule {}
