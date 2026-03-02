import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../../service/user';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-list.html',
  styleUrls: ['./student-list.css'],
})
export class StudentList implements OnInit {
  userList: any[] = [];
  loading: boolean = true;

  constructor(private userService: User) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.userList = data.users;
        this.loading = false;
        console.log('Users loaded ✅', this.userList);
      },
      error: (err) => {
        console.error('API error', err);
        this.loading = false;
      },
    });
  }
}
