import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestsService {

  selectedTest = '';
  constructor(private http: HttpClient) { }

  public getTests(item: any) {

    return this.http.get<any[]>('http://localhost:5000/test/'+ item.themeId);
  }
}
