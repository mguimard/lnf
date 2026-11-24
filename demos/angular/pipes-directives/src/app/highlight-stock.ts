import { Directive, ElementRef, inject, Input, OnInit, ViewContainerRef } from '@angular/core';
import { AddToCartButton } from './add-to-cart-button/add-to-cart-button';

@Directive({
  selector: '[appHighlightStock]',
})
export class HighlightStock implements OnInit {
  @Input('appHighlightStock')
  inStock: boolean = false;

  el = inject(ElementRef);
  vcr = inject(ViewContainerRef);

  ngOnInit(): void {
    console.log('stock : ', this.inStock);
    this.el.nativeElement.style.color = this.inStock ? 'green' : 'red';
    if (this.inStock) {
      let button = document.createElement('button');
      button.innerText = 'Add to cart';
      this.el.nativeElement.append(button);
    }

    // a investiguer
    //let template = '<app-add-to-cart-button></app-add-to-cart-button>'
    this.vcr.createComponent(AddToCartButton);
    // this.el.nativeElement.append(comp.instance);
  }
}
