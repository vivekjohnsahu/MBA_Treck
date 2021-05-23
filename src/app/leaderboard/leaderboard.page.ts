import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';  
import { PopovercomponentPage } from '../../app/popovercomponent/popovercomponent.page'; 

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.page.html',
  styleUrls: ['./leaderboard.page.scss'],
})
export class LeaderboardPage implements OnInit {

  constructor(private popover:PopoverController)  { }

  ngOnInit() {
  }

  CreatePopover()
   {
     this.popover.create({
      component:PopovercomponentPage,
      cssClass: 'filter-popup',
      showBackdrop:false
    }).then((popoverElement)=>{
       popoverElement.present();
     })
   }
}
