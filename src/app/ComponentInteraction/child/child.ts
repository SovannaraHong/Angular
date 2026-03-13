import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  text = '';
  @Input() Message = '';

  @Output() sendBack = new EventEmitter();

  send() {
    this.sendBack.emit('this text from child');
  }
}
