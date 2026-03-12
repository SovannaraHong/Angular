import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { DirectiveDT } from '../directive-dt';
import { DirectiveDTV2 } from '../directive-dtv2';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Home } from '../home/home';

@Component({
  selector: 'app-directive',
  imports: [DirectiveDT, DirectiveDTV2, CommonModule, FormsModule, Home],
  templateUrl: './directive.html',
  styleUrl: './directive.css',
})
export class Directive implements AfterViewInit {
  @ViewChild('facus') userNameFacus!: ElementRef;
  ngAfterViewInit(): void {
    this.userNameFacus.nativeElement.focus();
  }
  hColor(btn: HTMLElement) {
    btn.style.backgroundColor = 'red';
  }
  lColor(btn: HTMLElement) {
    btn.style.backgroundColor = 'yellow';
  }
  username = '';
  show!: boolean;
  imgPath = 'data/1.jpg';
  text = '';
  isVisible = false;
  showText() {
    this.isVisible = !this.isVisible;
  }
  doCheckName(value: string) {
    if (value == 'sovannara') {
      alert(`hello ${value}`);
    }
    this.username = value;
  }
  checkLogin = true;
}
