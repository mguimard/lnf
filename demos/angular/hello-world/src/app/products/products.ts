import { Component } from '@angular/core';
import { ProductItem } from '../product-item/product-item';

@Component({
  imports: [ProductItem],
  selector: 'app-products',
  styleUrl: './products.css',
  templateUrl: './products.html',
})
export class Products {
  products = ['kiwi', 'banane', 'citron'];
}
