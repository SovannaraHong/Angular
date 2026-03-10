import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { forbiddenWordValidate, usernameValidate } from '../../Common/Form.validation';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm implements OnInit {
  constructor(private fb: FormBuilder) {}
  registrationForm!: FormGroup;

  ngOnInit(): void {
    const validateUsername = ['admin', 'password', 'email', 'root'];
    this.registrationForm = this.fb.group({
      // username: ['', [Validators.required, Validators.minLength(4), usernameValidate(/admin/)]], //first parameter is field name and second parameter is condition
      username: [
        '',
        [Validators.required, Validators.minLength(4), forbiddenWordValidate(validateUsername)],
      ],
      password: [''],
      confirmPassword: [''],
      address: this.fb.group({
        province: [''],
        district: [''],
        commune: [''],
      }),
    });
  }

  get username() {
    return this.registrationForm.get('username');
  }
  save() {
    this.registrationForm.patchValue({
      username: ['bora'],
      password: ['123'],
      confirmPassword: ['123'],
      address: {
        province: 'kompong cham',
        district: 'koh mit',
        commune: 'koh pen',
      },
    });
  }
}
