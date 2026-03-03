import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../../service/user';

@Component({
  selector: 'app-student-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-detail.html',
  styleUrls: ['./student-detail.css'],
})
export class StudentDetail implements OnInit {
  constructor(
    private userService: User,
    private cd: ChangeDetectorRef,
  ) {}
  listDetail: any[] = [];
  ngOnInit(): void {
    this.userService.getProduct().subscribe((data) => {
      this.listDetail = data.products;
      this.cd.detectChanges();
    });
  }
}
