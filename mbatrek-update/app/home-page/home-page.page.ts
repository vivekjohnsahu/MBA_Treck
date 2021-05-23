import { Component, OnInit } from '@angular/core';
import * as $ from'jquery';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      
    })
  }  
}
