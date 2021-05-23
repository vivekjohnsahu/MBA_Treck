import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.page.html',
  styleUrls: ['./my-cart.page.scss'],
})
export class MyCartPage implements OnInit {

  input_val:number = 1;
  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $(".toggle-btn").click(function(){
        $("#subtotal-details").slideToggle();        
      });
    })
  }

  decVal(){
    if(this.input_val > 1){
      this.input_val--;
    }
    else{
      return false;
    }
  }
  incVal(){
      this.input_val++;
  }
}
