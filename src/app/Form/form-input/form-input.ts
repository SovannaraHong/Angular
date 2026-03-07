import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../student';

@Component({
  standalone: true,
  selector: 'app-form-input',
  imports: [FormsModule, CommonModule],
  templateUrl: './form-input.html',
  styleUrl: './form-input.css',
})
export class FormInput {
  name: string = '';
  phone: string = '';
  email: string = '';
  province: string = '';
  discrit: string = '';
  message: string = '';

  student = new Student('bora', '94573948', 'akira45465', 'kp', 'phone penh');
}
