import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms'

import { SignupPageRoutingModule } from './signup-routing.module';
import { NgxUiLoaderModule } from  'ngx-ui-loader';

import { SignupPage } from './signup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupPageRoutingModule,
    ReactiveFormsModule,
    NgxUiLoaderModule
  ],
  declarations: [SignupPage]
})
export class SignupPageModule {}
