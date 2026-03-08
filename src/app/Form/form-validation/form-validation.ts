import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../student';
import { HttpClient } from '@angular/common/http';
import { brandType, ProductService } from '../../service/product-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-validation',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './form-validation.html',
  styleUrl: './form-validation.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormValidation implements OnInit {
  student: Student = {
    name: '',
    phone: '',
    email: '',
    province: '',
    district: '',
    gender: 'Male',
    language: '',
  };
  brands$!: Observable<brandType[]>;
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.brands$ = this.productService.getBrands();
  }
}
