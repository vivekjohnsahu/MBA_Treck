import { Component, OnInit } from '@angular/core';
import {GlobleServiceService} from '../globle-service.service'
import { MenuController, IonSlides, AlertController, Platform,NavController,ToastController } from '@ionic/angular';
import { Router, Navigation, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-otp-verify',
  templateUrl: './otp-verify.page.html',
  styleUrls: ['./otp-verify.page.scss'],
})
export class OtpVerifyPage implements OnInit {

  number:any;
  otp:any;
  hide_show_page=true
  get_otp

  constructor(
    public globleServiceService:GlobleServiceService,
    private toastController:ToastController,
    private router:Router
  ) { }

  ngOnInit() {
  }

	getNumber(){
		if(this.number==null || this.number==undefined){
			this.alertMsg('Please fill the number.')
		}else if(this.number.length<10){
			this.alertMsg('Please fill the correct number.')
		}else{
			let key={
				mobno:this.number,
				apikey:this.globleServiceService.apikey
			}
			this.globleServiceService.GlobalHit(key,'phoneotp')
			.then(async data => {
				if(data['ErrorCode']=='0'){	
          this.alertMsgSuccess(data['message'])
          this.otp=data['data'].otp
          this.hide_show_page = false
				}else if(data['ErrorCode']=='1'){
					this.alertMsg(data['message'])
				}
			}); 
		}
	}

  submit(){
    if(this.get_otp==''){
      this.alertMsg('OTP not be black')
    }else if(this.get_otp.length<4){
      this.alertMsg('Please fill correct OTP')
    }else if(this.get_otp!=this.otp){
      this.alertMsg('OTP is invalid')
    }else{
      this.router.navigateByUrl('/signup')
    }
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

  async alertMsgSuccess(error_msg_show){
		const toast = await this.toastController.create({
			message: error_msg_show,
			color: 'success',
			position:'bottom',
			duration: 2000,
		});
		toast.present();
	}

}
