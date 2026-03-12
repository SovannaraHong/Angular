import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    const changePro = changes['logIn'];

    if (changePro.currentValue) {
      this.message = 'Welcome ';
    } else {
      this.message = 'please login';
    }
  }
  message = '';

  @Input() logIn!: boolean;
  //using getter setter
  // private _LoggedIn!: boolean;
  // get logIn() {
  //   return this._LoggedIn;
  // }
  // @Input() set logIn(value: boolean) {
  //   if (value) {
  //     this.message = 'hello';
  //   } else {
  //     this.message = 'pease login';
  //   }
  // }
}
