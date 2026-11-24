import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { Todo, Todos } from './todo';

@Service()
export class TodoService {
  http = inject(HttpClient);

  getTodos(): Observable<Todos> {
    return this.http.get<Todos>('https://jsonplaceholder.typicode.com/todos');
  }

  get404(): Observable<Todos> {
    return this.http.get<Todos>(
      'https://jsonplaceholder.typicode.com/ukehfriuyerghfuiyergfiuyergf',
    );
  }

  async getTodosAsPromise(): Promise<Todos> {
    return firstValueFrom(this.http.get<Todos>('https://jsonplaceholder.typicode.com/todos'));
  }

  // GET => lire (/todos ou /todo/123)
  // POST => créer (/todos), lancer des actions (/todos/_clear)
  // PUT => annule et remplace (/todo/123)
  // PATCH => modifie un champ (/todo/123)
  // DELETE => suppression (/todo/123)

  async createTodo(todo: Todo): Promise<void> {
    return firstValueFrom(this.http.post<void>('url des todos...', todo));
  }
}
