import { Component, OnInit } from '@angular/core';
import { Student } from '../service/student';

@Component({
  selector: 'app-fetching',
  standalone: true,
  imports: [],
  templateUrl: './fetching.html',
  styleUrl: './fetching.css',
})
export class Fetching implements OnInit {
  people: any[] = [];
  student: any[] = [];
  constructor(private _studentService: Student) {}
  ngOnInit() {
    // this.people = this._studentService.getStudentsV2();
    this._studentService.getStudents().subscribe((data) => {
      this.student = data;
    });
  }
  show: boolean = false;
  toggle() {
    this.show = !this.show;
  }
  listData: string[] = ['data1', 'data2', 'data3'];
}
