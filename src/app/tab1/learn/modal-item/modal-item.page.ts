import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-item',
  templateUrl: './modal-item.page.html',
  styleUrls: ['./modal-item.page.scss'],
})
export class ModalItemPage implements OnInit {

  constructor(private modalCtrl: ModalController, private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }

    dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
    }

  //Nav orqali bo'limlarga jo'natish
  learnItem() {
      this.modalCtrl.dismiss({
      'dismissed': true
    });
      this.navCtrl.navigateForward('/tabs/tab1/learn/learn-item');
  }

  testItem() {
      this.modalCtrl.dismiss({
      'dismissed': true
    });
      this.navCtrl.navigateForward('/tabs/tab1/learn/test-item');
  }

  videoItem() {
      this.modalCtrl.dismiss({
      'dismissed': true
    });
      this.navCtrl.navigateForward('/tabs/tab1/learn/media-item');
  }
}
