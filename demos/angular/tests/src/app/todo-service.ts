import { Service, signal } from '@angular/core';
import { Todo } from './todo';

@Service()
export class TodoService {
  todos = signal<Todo[]>([{ title: 'ceci' }, { title: 'cela' }]);

  addTodo(todo: Todo) {
    this.todos.set([...this.todos(), todo]);
  }
}
