import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('.otp-boxes form .form-group input').keyup(function(){
          if($(this).val().length==$(this).attr("maxlength")){
              $(this).next().focus();
          }
      });
    });
  }

}
