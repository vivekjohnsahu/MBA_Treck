import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupOtpPageRoutingModule } from './signup-otp-routing.module';

import { SignupOtpPage } from './signup-otp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupOtpPageRoutingModule
  ],
  declarations: [SignupOtpPage]
})
export class SignupOtpPageModule {}
