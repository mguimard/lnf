import { Component } from '@angular/core';
import { Counter } from './counter/counter';
import { Products } from './products/products';
import { ShoppingCart } from './shopping-cart/shopping-cart';

@Component({
  imports: [Products, ShoppingCart, Counter],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected title = 'my first app';
  showCounter = false;
}
