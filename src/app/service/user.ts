import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class User {
  url: string = 'https://dummyjson.com/products';
  constructor(private http: HttpClient) {}
  getProduct(): Observable<any> {
    return this.http.get(this.url);
  }
}
