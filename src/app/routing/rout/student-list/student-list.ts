import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  productList: any[] = [];
  constructor(
    private userService: User,
    private cd: ChangeDetectorRef,
  ) {}
  ngOnInit(): void {
    this.userService.getProduct().subscribe((data) => {
      this.productList = data.products;
      console.log('Products loaded:', this.productList);
      this.cd.detectChanges();
    });
  }
}
