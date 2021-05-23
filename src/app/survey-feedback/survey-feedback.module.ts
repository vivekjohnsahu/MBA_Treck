import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurveyFeedbackPageRoutingModule } from './survey-feedback-routing.module';

import { SurveyFeedbackPage } from './survey-feedback.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurveyFeedbackPageRoutingModule
  ],
  declarations: [SurveyFeedbackPage]
})
export class SurveyFeedbackPageModule {}
