import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizQuestionsPageRoutingModule } from './quiz-questions-routing.module';

import { QuizQuestionsPage } from './quiz-questions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizQuestionsPageRoutingModule
  ],
  declarations: [QuizQuestionsPage]
})
export class QuizQuestionsPageModule {}
