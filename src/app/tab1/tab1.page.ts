import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { CategoryService } from '../services/category.service';
import { Category } from '../services/category.model';
import { Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private placesSub: Subscription; 
  val = "";
  category: Observable<Category[]>;
  list1: Category[];
  searched: Category[];
  list: string[];
  isLoading = false;
  // MoonSun = true;

  constructor(private themes: ThemeService, private categorySrv: CategoryService, private router: Router) {

  } 
  //Learn pagega categorya id si bilan route qilib yuborish va searchni elemntni nol qilib qo'yish
  Learn(item) {
    this.val = ""
    this.list1 = this.searched;
    this.isLoading = false;
    this.categorySrv.selectedCategory = item;
    this.router.navigateByUrl("/tabs/tab1/learn");
  }
  //Kategoryalarni chaqirish
  ngOnInit() {
      this.placesSub =  this.categorySrv.getCategory().subscribe(categorys => {
        this.list1 = categorys;
        this.searched = this.list1;
        
    })
  }
//Qidiruv Spinner bilann reaktive
  Search(ev: any) {

    this.val = ev.target.value;
    this.list1 = this.searched;
    if (this.val && this.val.trim() !== '') {
      this.list1 = this.list1.filter((item) => {
        return (item.title.toLowerCase().indexOf(this.val.toLowerCase()) > -1);
      });

    }
        if (this.val && this.val.trim() !== '') {
          this.isLoading = true;
          setTimeout(() =>{
            this.isLoading = false;
          }, 2000);
        }
        // else {
        //   this.isLoading = false;
        // }

}

//Temani o'zgartirish
  darkLight() {
    if (this.themes.Dark === true) {
      this.themes.Dark = false;
      // this.MoonSun = false;
    }
    else {
      this.themes.Dark = true;
      // this.MoonSun = true;
    }
    if (this.themes.Dark === true) {
      this.themes.enableDark();
    }
    else {
      this.themes.enableLight();
    }
  }

//On destroy 
  ngOnDestroy() {
    if (this.placesSub) {
      this.placesSub.unsubscribe();
    }
  } 


}
