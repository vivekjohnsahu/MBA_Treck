import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtpPageRoutingModule } from './otp-routing.module';
import { ReactiveFormsModule } from '@angular/forms'

import { OtpPage } from './otp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    OtpPageRoutingModule
  ],
  declarations: [OtpPage]
})
export class OtpPageModule {}
