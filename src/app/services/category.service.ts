import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {Category } from './category.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {




  public selectedCategory = ""
  constructor(private http: HttpClient) { }



  public getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>('http://localhost:5000/product');
  }


}

