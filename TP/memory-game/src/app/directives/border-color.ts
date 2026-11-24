import { Directive, ElementRef, HostListener, inject, input } from '@angular/core';

@Directive({
  selector: '[appBorderColor]',
})
export class BorderColor {
  appBorderColor = input.required<string>();

  el = inject(ElementRef);

  @HostListener('mouseenter')
  onMouseIn() {
    this.el.nativeElement.style.border = `4px solid ${this.appBorderColor()}`;
  }

  @HostListener('mouseleave')
  onMouseOut() {
    this.el.nativeElement.style.border = null;
  }
}
