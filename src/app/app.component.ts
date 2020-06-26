import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Plugins, Capacitor} from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private router: Router,

  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if (Capacitor.isPluginAvailable('SplashScreen')) {
        Plugins.SplashScreen.hide();
      }
    });
  }


  //////////////////////////////////////////Side menyu elementlari va ular bilan ishlash
  sideList = [
    {
      name: "Asosiy oyna",
      icon: 'home'
    },
    {
      name: "Biz haqimizda",
      icon: 'megaphone-sharp'
    },
    {
      name: `To'lov`,
      icon: 'wallet-sharp'
    },
    {
      name: "Baho berish",
      icon: 'star-sharp'
    },
    {
      name: "Akaunt",
      icon: 'person-circle-sharp'
    },
    {
      name: "Ulashish",
      icon: 'share-social-sharp'
    },
    {
      name: "Logout",
      icon: 'log-out-sharp'
    }
  ];
//ROuter orqali kerakli sahifaga o'tish
    done(p) {
    if (p.name === 'Biz haqimizda') {
      this.router.navigateByUrl("about-us");
    }
      if (p.name === `To'lov`) {
        this.router.navigateByUrl("pay");
      }
      if (p.name === `Baho berish`) {
        this.router.navigateByUrl("rate");
      }
      if (p.name === `Akaunt`) {
        this.router.navigateByUrl("acount");
      }
      if (p.name === 'Ulashish') {
        this.router.navigateByUrl("share");
      }
      if (p.name === "Logout") {
        this.router.navigateByUrl("auth");
      }
      if (p.name === "Asosiy oyna") {
        this.router.navigateByUrl("/tabs/tab1");
      }
  }
//Side menyu off onn

}
