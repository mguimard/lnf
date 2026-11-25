import { Component } from '@angular/core';
import { Basic } from './basic/basic';
import { Reactive } from './reactive/reactive';
import { Signals } from './signals/signals';

@Component({
  imports: [Basic, Reactive, Signals],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
