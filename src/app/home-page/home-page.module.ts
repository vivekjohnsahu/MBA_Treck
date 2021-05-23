import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms'

import { HomePagePageRoutingModule } from './home-page-routing.module';
import { NgxUiLoaderModule } from  'ngx-ui-loader';
import { HomePagePage } from './home-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HomePagePageRoutingModule,
    NgxUiLoaderModule,
  ],
  declarations: [HomePagePage]
})
export class HomePagePageModule {}
