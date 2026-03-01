import { Component, signal } from '@angular/core';

import { InputOutput } from './input-output/input-output';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputOutput, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  message: string = '';
  dataMessage: string = '';
  dataFromChild: string = '';
  listFromChild: string[] = [];
  name = 'Hello akira';
  gender = 'male';
  recivedMessage(data: string | string[]) {
    if (typeof data === 'string') {
      this.dataFromChild = data;
    } else {
      this.listFromChild = data;
    }
  }
  addData(value: string) {
    this.dataMessage = value;
    alert(this.dataMessage);
    console.log(this.dataMessage);
  }
  flexibleData: string = '';

  protected readonly title = signal('phone-shop');
}
