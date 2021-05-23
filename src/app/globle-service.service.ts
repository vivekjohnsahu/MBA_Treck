import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ModalController, NavController } from '@ionic/angular';
import { ToastController} from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class GlobleServiceService {

  public BaseUrl= 'http://tekshapers.info/mbatrek/webservices/Webapi/';
  public apikey = 'mbatrek_UI00HThkkL51r14yui3ertjui7f567';
  
  constructor(
    public http: HttpClient,
    public modalController: ModalController,
    public toastController: ToastController,
  ) { }

  GlobalHit(data,url){
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    return new Promise((resolve, reject) => {
         this.http.post(this.BaseUrl+url,data,{"headers":headers}).subscribe((response) => {
        resolve(response);
      }, 
      (err) => {
        reject(err);
        this.alertMsg("Please check internet connection and try again")
      });
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
  
}


