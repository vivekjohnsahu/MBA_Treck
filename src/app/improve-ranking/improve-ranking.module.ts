import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImproveRankingPageRoutingModule } from './improve-ranking-routing.module';

import { ImproveRankingPage } from './improve-ranking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImproveRankingPageRoutingModule
  ],
  declarations: [ImproveRankingPage]
})
export class ImproveRankingPageModule {}
