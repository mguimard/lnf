import { Component } from '@angular/core';
import { CompA } from './comp-a/comp-a';
import { CompB } from './comp-b/comp-b';

@Component({
  imports: [CompA, CompB],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
