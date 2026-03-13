import { Component, signal } from '@angular/core';

import { InputOutput } from './input-output/input-output';
import { FormsModule } from '@angular/forms';

import { FormValidation } from './Form/form-validation/form-validation';
import { ReactiveForm } from './Form/reactive-form/reactive-form';
import { Directive } from './DirectiveComponent/directive/directive';
import { Parent } from './ComponentInteraction/parent/parent';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputOutput, FormsModule, Parent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  show: boolean = false;
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

  toggleShow() {
    this.show = !this.show;
  }

  protected readonly title = signal('phone-shop');
}
