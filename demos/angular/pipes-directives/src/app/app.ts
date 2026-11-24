import { CurrencyPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { AppLog } from './app-log';
import { DiscountPipe } from './discount-pipe';
import { DumbComponentDirective } from './dumb-component';
import { DumbComponent } from './dumb-component/dumb-component';
import { HighlightStock } from './highlight-stock';
import { Product } from './product';
import { SortArrayPipe } from './sort-array-pipe';
import { TestAsyncPipe } from './test-async-pipe';

@Component({
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    CurrencyPipe,
    DiscountPipe,
    TestAsyncPipe,
    SortArrayPipe,
    AppLog,
    HighlightStock,
    DumbComponent,
    DumbComponentDirective,
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  fruits = ['banane', 'kiwi', 'citron'];
  products: Product[] = [
    {
      name: 'computer',
      price: 1200,
      stock: true,
    },
    {
      name: 'smartphone',
      price: 459,
      stock: true,
    },
    {
      name: 'grille pain',
      price: 58,
      stock: false,
    },
  ];

  usePipeInTs() {
    let p = new UpperCasePipe();
    let input = 'hello';
    const result = p.transform(input); // HELLO
    // assert (result, 'HELLO')
  }
}
