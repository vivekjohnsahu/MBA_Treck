import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {GlobleServiceService} from '../globle-service.service'
import { Router, Navigation, ActivatedRoute } from '@angular/router';
import { ModalController, IonSlides, AlertController, Platform,NavController,ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-signup-otp',
  templateUrl: './signup-otp.page.html',
  styleUrls: ['./signup-otp.page.scss'],
})
export class SignupOtpPage implements OnInit {

  get_otp1=''
  get_otp2=''
  get_otp3=''
  get_otp4=''
  set_otp:any
  email:any

  constructor(
    public toastController:ToastController,
		private routers : ActivatedRoute,
    private modalController:ModalController,
    public globleServiceService:GlobleServiceService,
    private router : Router,
    private storage: Storage, 
  ) {
    this.set_otp=this.routers.snapshot.params['set_otp']
    this.email=this.routers.snapshot.params['email']
   }

  ngOnInit() {
    $(document).ready(function(){
      $('.otp-boxes form .form-group input').keyup(function(){
          if($(this).val().length==$(this).attr("maxlength")){
              $(this).next().focus();
          }
      });
    });
  }

  submit(){
    var otp = this.get_otp1 + this.get_otp2 + this.get_otp3 + this.get_otp4
    if(otp==''){
      this.alertMsg('OTP not be black')
    }else if(otp.length<4){
      this.alertMsg('Please fill correct OTP')
    }else if(otp!=this.set_otp){
      this.alertMsg('OTP is invalid')
    }else{
      let key={
        'apikey' : this.globleServiceService.apikey,
        'email':this.email,
        'otp':this.set_otp,
      }
      this.globleServiceService.GlobalHit(key,'ck_otp')
      .then(async data => {
        if(data['ErrorCode']=='0'){	
          this.storage.set('user_details', data['data']);
          this.router.navigateByUrl('/my-profile')
        }else if(data['ErrorCode']=='1'){
            this.alertMsg(data['message'])
        }
      }); 
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
}
