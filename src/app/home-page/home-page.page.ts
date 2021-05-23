import { Component, OnInit, HostListener } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as $ from'jquery';
import {GlobleServiceService} from '../globle-service.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuController, IonSlides, AlertController, Platform,NavController,ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router, Navigation } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {

	loginForm: FormGroup;
	LoginData = {
		email:"",
		password:"",
	};

	@HostListener('document:ionBackButton', ['$event'])
	overrideHardwareBackAction(event: any) {
		this.exitApp()
		event.detail.register(100, async () => {
			event.stopImmediatePropagation();
			event.stopPropagation();
			event.preventDefault();
		});
	}
	
	constructor(
		private router : Router, 
		public menu: MenuController,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar,
		private platform: Platform,
		private storage: Storage,
		public globleServiceService: GlobleServiceService,
		public alertController: AlertController,
		private navCtrl: NavController,
		public toastController:ToastController,
		private ngxService: NgxUiLoaderService
	) { 
		let email_pattern = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
		this.loginForm = new FormGroup({
			email: new FormControl('', [Validators.required, Validators.pattern(email_pattern)]),            
			password: new FormControl('', [Validators.required, Validators.minLength(1)]),
		});
	}

	ionViewWillEnter() {
		this.menu.enable(false);
	}

	ngOnInit(){
		$(window).scroll(function() {    
		var scroll = $(window).scrollTop();
			if (scroll >= 60) {
				$("#toolbar").addClass("gradient-bg");
			}
			else{
				$("#toolbar").removeClass("gradient-bg");
			}
		});
	}

	login(){
		this.ngxService.start();
		let key={
			'apikey' : this.globleServiceService.apikey,
			'email':this.LoginData.email,
			'password':this.LoginData.password,
			'role':'1',
		}
		this.globleServiceService.GlobalHit(key,'login')
		.then(async data => {
			this.ngxService.stop();
			if(data['ErrorCode']=='0'){	
				this.storage.set('user_details', data['data']);
				this.router.navigateByUrl('/my-profile')
				this.loginForm.reset();
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

	exitApp(){
		if(this.router.url=='/home-page'){
			navigator['app'].exitApp();	
		}else{
			this.navCtrl.pop();
		}
	}

	forgotPassword(){
		this.router.navigateByUrl('/forgot-password')
	}

	async SignUp(){
		this.router.navigateByUrl('/otp-verify')
	}

	ModelClose(){
		var modal = document.getElementById("myModal");
		modal.style.display = "none";
	}
	    
}
