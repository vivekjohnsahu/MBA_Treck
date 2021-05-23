import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotPasswordPageRoutingModule } from './forgot-password-routing.module';
import { ReactiveFormsModule } from '@angular/forms'
import { NgxUiLoaderModule } from  'ngx-ui-loader';

import { ForgotPasswordPage } from './forgot-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ForgotPasswordPageRoutingModule,
    NgxUiLoaderModule
  ],
  declarations: [ForgotPasswordPage]
})
export class ForgotPasswordPageModule {}
