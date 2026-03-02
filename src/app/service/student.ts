import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Student {
  url: string = 'data/student.json';
  constructor(private http: HttpClient) {}
  getStudents(): Observable<any> {
    return this.http.get(this.url);
  }

  getStudentsV2() {
    return [
      {
        id: 1,
        name: 'John Doe',
        age: 30,
        email: 'john.doe@example.com',
      },
      {
        id: 2,
        name: 'Jane Smith',
        age: 25,
        email: 'jane.smith@example.com',
      },
      {
        id: 3,
        name: 'Bob Johnson',
        age: 35,
        email: 'bob.johnson@example.com',
      },
    ];
  }
}
