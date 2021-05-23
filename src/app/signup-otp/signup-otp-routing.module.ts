import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupOtpPage } from './signup-otp.page';

const routes: Routes = [
  {
    path: '',
    component: SignupOtpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupOtpPageRoutingModule {}
