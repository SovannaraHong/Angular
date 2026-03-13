import { Component } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-parent',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  text = '';
  message = 'message from parent';
  reciveText(text: string) {
    this.text = text;
  }
}
