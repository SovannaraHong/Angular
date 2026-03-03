import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductResponse } from './product-service';
export interface UserType {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  phone: string;
  image: string;
}
export interface UserResponse {
  users: UserType[];
  total: number;
  skip: number;
  limit: number;
}
@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: string = 'https://dummyjson.com/users';
  constructor(private http: HttpClient) {}
  getUsers(): Observable<UserType[]> {
    return this.http.get<UserResponse>(this.url).pipe(map((response) => response.users));
  }
}
