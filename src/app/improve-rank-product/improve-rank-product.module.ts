import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImproveRankProductPageRoutingModule } from './improve-rank-product-routing.module';

import { ImproveRankProductPage } from './improve-rank-product.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImproveRankProductPageRoutingModule
  ],
  declarations: [ImproveRankProductPage]
})
export class ImproveRankProductPageModule {}
