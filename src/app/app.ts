import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventBiding } from './event-biding/event-biding';
import { TwoWayBinding } from './two-way-binding/two-way-binding';
import { Structuring } from './structuring/structuring';

@Component({
  selector: 'app-root',
  imports: [Structuring],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('phone-shop');
}
