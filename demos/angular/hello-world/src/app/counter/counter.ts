import { Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-counter',
  styleUrl: './counter.css',
  templateUrl: './counter.html',
})
export class Counter implements OnInit, OnDestroy {
  count = signal(0);

  intervalId: number = 0;

  constructor() {
    console.log('new');
  }

  ngOnInit() {
    console.log('init');
    this.intervalId = setInterval(() => {
      console.log(this);
      this.count.set(this.count() + 1);
    }, 1000);
  }

  ngOnDestroy() {
    console.log('destroy');
    clearInterval(this.intervalId);
  }

  reset() {
    this.count.set(0);
  }
}
