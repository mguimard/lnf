import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appLog]',
})
export class AppLog {
  // contexte d'injection
  el = inject(ElementRef);

  constructor() {
    console.log('new log !', this.el);
  }

  @HostListener('click')
  onClick() {
    console.log('Le user a cliqué sur ', this.el);
  }
}
