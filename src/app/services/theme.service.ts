import { Injectable, RendererFactory2, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  renderer: Renderer2;
  //Side menyuni ishlashi ishlamasligi uchun
  SideOffOn = true;
  //Temani o'chib yonishi uchun
  Dark = false;
  constructor(private rendererFactory: RendererFactory2, @Inject(DOCUMENT) private document: Document) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }



  enableDark() {
    this.renderer.addClass(this.document.body, 'dark');
  }

  enableLight() {
    this.renderer.removeClass(this.document.body, 'dark');
  }
}
