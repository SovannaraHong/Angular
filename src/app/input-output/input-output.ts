import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-output',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-output.html',
  styleUrl: './input-output.css',
})
export class InputOutput {
  listChild: string[] = ['child1', 'child2', 'child3'];
  message: string = 'Hello from child';
  inputData: string = '';
  @Input() parentData: string = ''; //go to parent component and bind the data to this variable
  @Input() genderParent: string = '';
  @Input() inputParent: string = '';
  @Input() flexibleData: string = '';

  @Output() childEvent = new EventEmitter<string | string[]>();

  sendMessage() {
    this.childEvent.emit(this.message);
    this.childEvent.emit(this.listChild);
  }
}
