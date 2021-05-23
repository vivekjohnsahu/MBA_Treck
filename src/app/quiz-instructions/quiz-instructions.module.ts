import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizInstructionsPageRoutingModule } from './quiz-instructions-routing.module';

import { QuizInstructionsPage } from './quiz-instructions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizInstructionsPageRoutingModule
  ],
  declarations: [QuizInstructionsPage]
})
export class QuizInstructionsPageModule {}
