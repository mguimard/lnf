import { Component, DestroyRef, inject, OnDestroy, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { catchError, firstValueFrom, of, Subscription } from 'rxjs';
import { Todos } from '../todo';
import { TodoService } from '../todo-service';

@Component({
  imports: [],
  selector: 'app-todo-list',
  styleUrl: './todo-list.css',
  templateUrl: './todo-list.html',
})
export class TodoList implements OnDestroy {
  service = inject(TodoService);

  todos = signal<Todos>([]);
  subscription!: Subscription;

  async loadversionleak() {
    // version observable, subscribe à la main
    // fuite mémoire
    this.service.getTodos().subscribe((data) => {
      this.todos.set(data);
    });
  }

  async loadVersionPromesse() {
    // Observable to promise
    let prom = firstValueFrom(this.service.getTodos());
    let data = await prom;
    this.todos.set(data);
  }

  async loadVersionUnsubscribeManuel() {
    // observbable avec désinscription manuelle
    this.subscription = this.service.getTodos().subscribe((data) => {
      this.todos.set(data);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  // auto unsubscribe on destroy
  destroyRef = inject(DestroyRef);

  async load() {
    this.service
      .getTodos()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((data) => {
        this.todos.set(data);
      });
  }

  get404VersionObservable() {
    this.service.get404().subscribe({
      next: (data) => {
        // use the data
      },
      error: (err) => {
        console.log('Oooops', err);
      },
    });
  }

  get404() {
    this.service
      .get404()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .pipe(
        catchError((err) => {
          // gestion
          console.log('Error catched', err);
          return of([]);
        }),
      )
      .subscribe((data) => {
        console.log('Got the data: ', data);
        this.todos.set(data);
      });
  }
}
