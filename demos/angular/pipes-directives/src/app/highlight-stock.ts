import { Directive, ElementRef, inject, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightStock]',
})
export class HighlightStock implements OnInit {
  @Input('appHighlightStock')
  inStock: boolean = false;

  el = inject(ElementRef);

  ngOnInit(): void {
    console.log('stock : ', this.inStock);
    this.el.nativeElement.style.color = this.inStock ? 'green' : 'red';
    if (this.inStock) {
      let button = document.createElement('button');
      button.innerText = 'Add to cart';
      this.el.nativeElement.append(button);
    }
    // a investiguer
    let d = document.createElement('app-dumb-component');
    this.el.nativeElement.append(d);
  }
}
