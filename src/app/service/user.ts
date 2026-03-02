import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class User {
  url: string = 'https://dummyjson.com/users';
  constructor(private http: HttpClient) {}
  getUsers(): Observable<any> {
    return this.http.get(this.url);
  }
}
