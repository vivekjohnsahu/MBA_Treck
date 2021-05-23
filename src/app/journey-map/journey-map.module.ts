import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JourneyMapPageRoutingModule } from './journey-map-routing.module';

import { JourneyMapPage } from './journey-map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JourneyMapPageRoutingModule
  ],
  declarations: [JourneyMapPage]
})
export class JourneyMapPageModule {}
