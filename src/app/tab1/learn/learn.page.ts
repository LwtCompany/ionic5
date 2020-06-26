import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/services/category.model';
import { CategoryService } from 'src/app/services/category.service';
import { ThemeService } from 'src/app/services/theme.service';
import { ThemesService } from './themes.service';
import { Themes } from './themes.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { LearnItemPage } from './learn-item/learn-item.page';
import { ModalItemPage } from './modal-item/modal-item.page';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.page.html',
  styleUrls: ['./learn.page.scss'],
})
export class LearnPage implements OnInit {
  isLoading = false;
  catId;
  dissplay = "none";
  allThemes: Themes[];
  private placesSub: Subscription; 
  allTests;
  constructor(private modalController: ModalController, private catSrv: CategoryService, private themeSrv: ThemesService, private route: ActivatedRoute, private navCtrl: NavController) { }

      public isCollapsed = true;
  ngOnInit() {
    this.catId = this.catSrv.selectedCategory;
  
    if (!this.catId === true) {
      this.navCtrl.navigateBack('/tabs/tab1');
      return;
    } else {
      this.themeSrv.getTheme(this.catId).subscribe((item) => {
        this.allThemes = item;
      });
  
    }
  }

  //Learn itemga o'tish
  async learnItem(item) {
  
    this.themeSrv.selectedtheme = item;
    const modal = await this.modalController.create({
      component: ModalItemPage,
      cssClass: 'my-modal-css',
      animated: true,
      swipeToClose: true,
    });
    return (await (modal)).present()
  }
  //Test itemga o'tish
  // testItem(test) {
  //   this.testSrv.selectedTest = test;
  //   this.navCtrl.navigateForward('/tabs/tab1/learn/test-item');
  // }
    ngOnDestroy() {
    if (this.placesSub) {
      this.placesSub.unsubscribe();
    }
    }
  

}
