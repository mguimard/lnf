import { AsyncPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { CounterService } from './counter-service';

@Component({
  imports: [AsyncPipe],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  service = inject(CounterService);

  error = signal('');
  data = signal('');

  constructor() {
    //this.service.obs$.subscribe((data) => console.log(data));
    this.load();
  }

  async load() {
    this.error.set('');
    this.data.set('');
    try {
      this.data.set(await this.service.getPainChoc());
    } catch (err) {
      this.error.set(err as string);
    }
  }
}
