import { Component, OnInit, HostListener } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, ToastController, NavController } from '@ionic/angular';
import {GlobleServiceService} from '../globle-service.service'
import { Storage } from '@ionic/storage';
import { AppComponent } from '../app.component'
import { Router,ActivatedRoute } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as $ from 'jquery';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {

	user_email:any
	changePassword: FormGroup;
	errorHideShow=false
	email:any;
	change_pw = {
		new_password:"",
		comf_password:"",
	};

	constructor(
		public alertController: AlertController,
		public toastController:ToastController,
		private globleServiceService:GlobleServiceService,
		private storage:Storage,
		private appComponent:AppComponent,
		private router:Router,
		private routers:ActivatedRoute,
		private statusBar: StatusBar,
		private navCtrl: NavController,
		private ngxService: NgxUiLoaderService
	) 
	{
		 //  validation pattern start
		this.email=this.routers.snapshot.params['email']
		this.changePassword = new FormGroup({
			new_password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
			comf_password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)])
		});
	}
 
	 ngOnInit() {
		 this.statusBar.overlaysWebView(false);
		 this.statusBar.backgroundColorByHexString('#000000'); 

		 $(function() {
			var txt = $("ion-input#pass1");
			var func = function() {
				txt.val(txt.val().replace(/\s/g, ''));
			}
			txt.keyup(func).blur(func);
		});
		$(function() {
			var txt = $("ion-input#pass2");
			var func = function() {
				txt.val(txt.val().replace(/\s/g, ''));
			}
			txt.keyup(func).blur(func);
		});

	 }

	changePass(){
		this.storage.get('user_email').then(async (val) => {
		this.user_email = val;
			if (this.change_pw.new_password !=  this.change_pw.comf_password){
				this.errorHideShow=true
			}else if(this.change_pw.new_password && this.change_pw.comf_password){
				this.ngxService.start();
				let key = {
					email:this.email,
					apikey:this.globleServiceService.apikey,
					new_password:this.change_pw.new_password,
					role:'1',
				}
				this.globleServiceService.GlobalHit(key,'change_password')
				.then(async data => {
					this.ngxService.stop();
					if(data['ErrorCode']=='0'){
						const toast = await this.toastController.create({
							message: data['message'],
							position:'bottom',
							color:"success",
							duration: 3000
						});
						toast.present();
						this.changePassword.reset()
						this.router.navigateByUrl('/home-page');
					}else{
						const toast = await this.toastController.create({
							message: data['message'],
							position:'bottom',
							color:"danger",
							duration: 3000
						});
						toast.present();
					}
				})
			}
		})
	}

	clickInput(){
		this.errorHideShow=false
	}
	
	forgotPasswordPage(){
		this.router.navigateByUrl('/forgot-password')
		this.changePassword.reset()
	}

}
