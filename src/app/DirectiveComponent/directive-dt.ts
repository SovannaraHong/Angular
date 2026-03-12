import { Directive, ElementRef, HostListener, Inject, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirectiveDT]',
  standalone: true,
})
export class DirectiveDT {
  @Input() showText!: string;

  constructor(
    private element: ElementRef,
    private render: Renderer2,
  ) {
    this.render.addClass(this.element.nativeElement, 'transition-all');
    this.render.addClass(this.element.nativeElement, 'duration-300');
    this.render.addClass(this.element.nativeElement, 'ease-in-out');
  }

  @HostListener('mouseover')
  doMouseOver() {
    this.render.setStyle(this.element.nativeElement, 'color', 'white');
    this.render.setStyle(this.element.nativeElement, 'background-color', 'red');
    this.render.setStyle(this.element.nativeElement, 'font-size', '20px');
    this.render.setProperty(this.element.nativeElement, 'innerText', 'kdm ahlim');
    this.render.addClass(this.element.nativeElement, 'scale-110');
  }
  @HostListener('mouseleave')
  doMouseLeave() {
    this.render.setStyle(this.element.nativeElement, 'color', this.showText);
  }
}
