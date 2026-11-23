import { Component, inject } from '@angular/core';
import { CartService } from '../cart-service';

@Component({
  imports: [],
  selector: 'app-shopping-cart',
  styleUrl: './shopping-cart.css',
  templateUrl: './shopping-cart.html',
})
export class ShoppingCart {
  service = inject(CartService);
}
