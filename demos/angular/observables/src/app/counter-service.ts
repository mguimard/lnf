import { Service } from '@angular/core';
import { BehaviorSubject, interval, of, take } from 'rxjs';

export interface Pizza {
  name: string;
  price: number;
}

@Service()
export class CounterService {
  obs$ = interval(1000);

  prom$ = Promise.resolve('hello from promise');

  getPainChoc(): Promise<string> {
    const boulangerieOuverte = Math.random() > 0.5;

    return new Promise((resolve, reject) => {
      setTimeout(function () {
        if (boulangerieOuverte) {
          resolve('Pain chocolats'); // data
        } else {
          reject('Fermé !'); // err
        }
      }, 500);
    });
  }

  users$ = of(['alice', 'bob', 'joe']);

  counterTo11$ = interval(1000).pipe(take(11));

  // tuyau
  private subject$ = new BehaviorSubject<number>(0);
  tuyau$ = this.subject$.asObservable();

  i = 0;
  constructor() {
    setInterval(() => {
      this.subject$.next(this.i++);
    }, 1000);
  }

  resetTuyau() {
    this.i = 0;
  }

  pizzas: Pizza[] = [
    {
      name: 'reine',
      price: 1,
    },
    {
      name: 'chorizo',
      price: 1,
    },
  ];

  private pizzaSub$ = new BehaviorSubject<Pizza[]>(this.pizzas);
  tuyauPizza$ = this.pizzaSub$.asObservable();

  updatePrice() {
    this.pizzas.forEach((p) => p.price++);
    this.pizzaSub$.next([...this.pizzas]);
  }
}
