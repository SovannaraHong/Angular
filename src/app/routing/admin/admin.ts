import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AdminService, adminType } from '../../service/admin-service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  imports: [CommonModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Admin implements OnInit {
  adminList$!: Observable<adminType[]>;
  constructor(private adminService: AdminService) {}
  ngOnInit(): void {
    this.adminList$ = this.adminService.getAdmins();
  }
}
