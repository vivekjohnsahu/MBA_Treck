import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpcomingSession2PageRoutingModule } from './upcoming-session2-routing.module';

import { UpcomingSession2Page } from './upcoming-session2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpcomingSession2PageRoutingModule
  ],
  declarations: [UpcomingSession2Page]
})
export class UpcomingSession2PageModule {}
