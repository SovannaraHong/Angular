import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService, UserType } from '../../service/user-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class User implements OnInit {
  userList$!: Observable<UserType[]>;
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userList$ = this.userService.getUsers();
  }
}
