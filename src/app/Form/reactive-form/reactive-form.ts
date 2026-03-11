import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  forbiddenWordValidate,
  passwordValidate,
  usernameValidate,
} from '../../Common/Form.validation';

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
    this.registrationForm = this.fb.group(
      {
        // username: ['', [Validators.required, Validators.minLength(4), usernameValidate(/admin/)]], //first parameter is field name and second parameter is condition
        username: [
          '',
          [Validators.required, Validators.minLength(4), forbiddenWordValidate(validateUsername)],
        ],
        password: [''],
        confirmPassword: [''],
        subscribe: [false],
        email: [''],
        phone: [],
        alternativePhone: this.fb.array([]),
        address: this.fb.group({
          province: [''],
          district: [''],
          commune: [''],
        }),
      },
      { validators: passwordValidate },
    );
    this.registrationForm.get('subscribe')?.valueChanges.subscribe((value) => {
      console.log(value);
      if (value) {
        this.getEmail?.setValidators(Validators.required);
      } else {
        this.getEmail?.clearValidators();
      }
      this.getEmail?.updateValueAndValidity();
    });
  }
  addPhone() {
    this.alternativePhone.push(this.fb.control(''));
  }
  removePhone(index: number) {
    this.alternativePhone.removeAt(index);
  }

  save() {
    this.registrationForm.patchValue({
      username: ['bora'],
      password: ['123'],
      confirmPassword: ['123'],
      subscribe: [''],
      email: [''],

      address: {
        province: 'kompong cham',
        district: 'koh mit',
        commune: 'koh pen',
      },
    });
  }

  get username() {
    return this.registrationForm.get('username');
  }
  get confirmPassword() {
    return this.registrationForm.get('confirmPassword');
  }
  get getEmail() {
    return this.registrationForm.get('email');
  }
  get alternativePhone() {
    return this.registrationForm.get('alternativePhone') as FormArray;
  }
}
