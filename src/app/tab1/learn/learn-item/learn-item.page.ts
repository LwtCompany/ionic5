import { Component, OnInit } from '@angular/core';
import { ThemesService } from '../themes.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-learn-item',
  templateUrl: './learn-item.page.html',
  styleUrls: ['./learn-item.page.scss'],
})
export class LearnItemPage implements OnInit {

  chosenitem;
  allItems;
  constructor(private themeSrv: ThemesService, private navCtrl: NavController) { }

  ngOnInit() {
    this.chosenitem = this.themeSrv.selectedtheme;
    if (!this.chosenitem=== true) {
      this.navCtrl.navigateBack('/tabs/tab1/learn');
      return;
    } 
    
  }

}
