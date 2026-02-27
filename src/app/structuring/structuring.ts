import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-structuring',
  imports: [CommonModule],
  templateUrl: './structuring.html',
  styleUrl: './structuring.css',
})
export class Structuring {
  isMessage: boolean = true;
  text: string = 'Welcome to Cambodia';
  isLarge: boolean = true;

  get myStyle() {
    return {
      'w-200': this.isLarge,
      'w-100': !this.isLarge,
      'h-100': true,
      'bg-green-500': this.isLarge,
      'bg-red-500': !this.isLarge,
    };
  }

  myFun() {
    this.isMessage = !this.isMessage;
  }
  toggleChange() {
    this.isLarge = !this.isLarge;
  }
}
