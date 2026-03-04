import { Component, signal } from '@angular/core';

import { InputOutput } from './input-output/input-output';
import { FormsModule } from '@angular/forms';
import { Fetching } from './fetching/fetching';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './routing/navbar/navbar';
import { Footer } from './routing/footer/footer';
import { Employee } from './employeeDashBoard/employee/employee';
import { NavbarEmployee } from './employeeDashBoard/navbar-employee/navbar-employee';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputOutput, FormsModule, RouterOutlet, NavbarEmployee],
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
