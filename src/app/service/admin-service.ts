import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { map, Observable } from 'rxjs';
export interface adminType {
  id: number;
  email: string;
  password: string;
  name: string;
  avatar: string;
}
export interface adminResponse {
  users: adminType[];
  limit: number;
  skip: number;
  total: number;
}

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  url: string = 'https://api.escuelajs.co/api/v1/users';
  constructor(private http: HttpClient) {}
  getAdmins(): Observable<adminType[]> {
    return this.http.get<adminType[]>(this.url);
  }
}
