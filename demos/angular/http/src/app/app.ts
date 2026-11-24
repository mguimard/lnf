import { Component, signal } from '@angular/core';
import { TodoList } from './todo-list/todo-list';

@Component({
  imports: [TodoList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('http');
}
