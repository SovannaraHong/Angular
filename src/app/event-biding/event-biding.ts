import { Component } from '@angular/core';

@Component({
  selector: 'app-event-biding',
  imports: [],
  templateUrl: './event-biding.html',
  styleUrl: './event-biding.css',
})
export class EventBiding {
  name: string = '';
  des: string = '';
  myClick(text: string) {
    this.name = 'Dara';
    this.des = text;
  }
}
