import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpcomingSessionPageRoutingModule } from './upcoming-session-routing.module';

import { UpcomingSessionPage } from './upcoming-session.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpcomingSessionPageRoutingModule
  ],
  declarations: [UpcomingSessionPage]
})
export class UpcomingSessionPageModule {}
