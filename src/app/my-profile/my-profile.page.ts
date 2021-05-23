import { Component, OnInit } from '@angular/core';
import * as $ from'jquery';
import {GlobleServiceService} from '../globle-service.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuController, IonSlides, AlertController, Platform,NavController,ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router, Navigation } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage implements OnInit {

  constructor(
    private router : Router, 
		public menu: MenuController,
		private storage: Storage,
		public globleServiceService: GlobleServiceService,
		public alertController: AlertController,
		private navCtrl: NavController,
    public toastController:ToastController,
  ) { }

  ngOnInit() {}

  edit(){

  }

}
