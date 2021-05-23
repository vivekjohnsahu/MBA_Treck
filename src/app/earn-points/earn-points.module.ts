import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EarnPointsPageRoutingModule } from './earn-points-routing.module';

import { EarnPointsPage } from './earn-points.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EarnPointsPageRoutingModule
  ],
  declarations: [EarnPointsPage]
})
export class EarnPointsPageModule {}
