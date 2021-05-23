import { Component, OnInit } from '@angular/core';
import {GlobleServiceService} from '../globle-service.service'
import { Router, Navigation } from '@angular/router';
import { MenuController, IonSlides, AlertController, Platform,NavController,ToastController } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  forgotForm: FormGroup;
	forgotData = {
		email:"",
  };
  
  constructor(
    private router : Router, 
		public globleServiceService: GlobleServiceService,
		public alertController: AlertController,
		private navCtrl: NavController,
    public toastController:ToastController,
    private ngxService: NgxUiLoaderService
  ) { 
    let email_pattern = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
		this.forgotForm = new FormGroup({
			email: new FormControl('', [Validators.required, Validators.pattern(email_pattern)]),            
		});
  }

  ngOnInit() {
  }

  forgot(){
    this.ngxService.start();
      let key={
        'apikey' : this.globleServiceService.apikey,
        'email':this.forgotData.email,
        'role':'1',
      }
      this.globleServiceService.GlobalHit(key,'forget_password')
      .then(async data => {
        this.ngxService.stop();
        if(data['ErrorCode']=='0'){	
          this.router.navigateByUrl('/otp/' + data['data'].otp +'/'+ data['data'].email)
          this.forgotForm.reset();
          this.alertMsgsuccess(data['message'])
        }else if(data['ErrorCode']=='1'){
          this.alertMsg(data['message'])
        }
      }); 
    }
  
    async alertMsg(error_msg_show){
      const toast = await this.toastController.create({
        message: error_msg_show,
        color: 'danger',
        position:'bottom',
        duration: 2000,
      });
      toast.present();
    }

    async alertMsgsuccess(error_msg_show){
      const toast = await this.toastController.create({
        message: error_msg_show,
        color: 'success',
        position:'bottom',
        duration: 2000,
      });
      toast.present();
    }

    loginPage(){
      this.router.navigateByUrl('/home-page');
    }
  

}
