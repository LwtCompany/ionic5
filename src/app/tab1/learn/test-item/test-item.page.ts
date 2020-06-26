import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';

import { ThemesService } from '../themes.service';
import { TestsService } from './tests.service';
import { Test } from '../test.model';

@Component({
  selector: 'app-test-item',
  templateUrl: './test-item.page.html',
  styleUrls: ['./test-item.page.scss'],
})
export class TestItemPage implements OnInit {

  choosentheme;
  allTests: Test[];
  constructor(private navCtrl: NavController, private themeSrv: ThemesService, private testSrv: TestsService) { }

  ngOnInit() {
    this.choosentheme = this.themeSrv.selectedtheme;
    if (!this.choosentheme === true) {
      this.navCtrl.navigateBack('/tabs/tab1/learn');
      return;
    } else {
      this.testSrv.getTests(this.choosentheme).subscribe((item) => {
        this.allTests = item;
      });

    }

  }
}
