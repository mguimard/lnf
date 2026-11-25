import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appSetRedOnClick]',
})
export class SetRedOnClick {
  el = inject(ElementRef);

  @HostListener('click')
  onClick() {
    this.el.nativeElement.style.color = 'red';
  }
}
