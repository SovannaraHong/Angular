import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface EmployeeType {
  id: number;
  login: string;
  type: string;
  avatar_url: string;
  node_id: string;
}
export interface EmployeeResponse {
  employees: EmployeeType[];
  total: number;
  skip: number;
  limit: number;
}
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  url: string = 'https://api.github.com/users';
  constructor(private http: HttpClient) {}
  getEmployees(): Observable<EmployeeType[]> {
    return this.http.get<EmployeeType[]>(this.url);
  }
  getEmployeeById(id: number): Observable<EmployeeType> {
    return this.http.get<EmployeeType>(`${this.url}/${id}`);
  }
}
