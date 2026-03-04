import { Component } from '@angular/core';
import { EmployeeService, EmployeeType } from '../../service/employee-service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-detail',
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './employee-detail.html',
  styleUrl: './employee-detail.css',
})
export class EmployeeDetail {
  employeeDetailList$!: Observable<EmployeeType>;
  constructor(
    private _employeeService: EmployeeService,
    private router: ActivatedRoute,
  ) {
    this.employeeDetailList$ = this.router.paramMap.pipe(
      switchMap((param) => this._employeeService.getEmployeeById(Number(param.get('id')))),
    );
  }
}
