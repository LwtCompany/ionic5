import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Themes } from './themes.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  selectedtheme = '';
  constructor(private http: HttpClient) { }

  public getTheme(item: any) {

    return this.http.get<any[]>('http://localhost:5000/themes/'+ item.catId);
  }
}
