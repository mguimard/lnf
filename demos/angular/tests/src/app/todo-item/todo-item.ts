import { Component, inject } from '@angular/core';
import { Popup } from '../popup/popup';
import { SetRedOnClick } from '../set-red-on-click';
import { TodoService } from '../todo-service';
import { UpperPipe } from '../upper-pipe';

@Component({
  imports: [UpperPipe, Popup, SetRedOnClick],
  selector: 'app-todo-list',
  styleUrl: './todo-item.css',
  templateUrl: './todo-item.html',
})
export class TodoList {
  service = inject(TodoService);

  addTodo() {
    this.service.addTodo({ title: Date.now() + '' });
  }
}
