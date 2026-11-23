import { Component, inject, input } from '@angular/core';
import { CartService } from '../cart-service';

@Component({
  imports: [],
  selector: 'app-product-item',
  styleUrl: './product-item.css',
  templateUrl: './product-item.html',
})
export class ProductItem {
  // déclare les inputs
  p = input.required<string>();

  service = inject(CartService);

  //constructor(
  // private myService: CartService
  //){}

  addToCart(product: string) {
    console.log(product);
    this.service.addToCart(product);
  }
}
