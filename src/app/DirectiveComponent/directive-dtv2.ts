import {
  Directive,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[myIf]',
})
export class DirectiveDTV2 implements OnChanges {
  @Input() myIf!: boolean;

  constructor(
    private vc: ViewContainerRef,
    private template: TemplateRef<any>,
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (this.myIf) {
      this.vc.createEmbeddedView(this.template);
    } else {
      this.vc.clear();
    }
  }
}
