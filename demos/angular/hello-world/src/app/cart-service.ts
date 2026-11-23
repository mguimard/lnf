import { Service, signal } from '@angular/core';

@Service()
export class CartService {
  // /*public*/ cart: string[] = ['oranges'];

  cart = signal<string[]>(['oranges']);

  addToCart(p: string): void {
    //this.cart.push(p);
    this.cart.set([...this.cart(), p]);
  }
}
