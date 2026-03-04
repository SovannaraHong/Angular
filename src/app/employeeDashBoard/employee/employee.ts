import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { EmployeeService, EmployeeType } from '../../service/employee-service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee',
  imports: [CommonModule, RouterLink],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Employee implements OnInit {
  employeeList$!: Observable<EmployeeType[]>;
  constructor(private _employeeService: EmployeeService) {}
  ngOnInit() {
    this.employeeList$ = this._employeeService.getEmployees();
  }
}
