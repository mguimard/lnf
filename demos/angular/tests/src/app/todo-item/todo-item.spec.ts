import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Todo } from '../todo';
import { TodoService } from '../todo-service';
import { UpperPipe } from '../upper-pipe';
import { TodoList } from './todo-item';

const FakeService = {
  todos: signal<Todo[]>([]),
  addTodo() {},
};

@Component({
  selector: 'app-popup',
  template: 'COUCOU_FAKE_POPUP',
  imports: [],
})
class FakePopup {}

describe('TodoItem', () => {
  let component: TodoList;
  let fixture: ComponentFixture<TodoList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoList],
    })
      .overrideComponent(TodoList, {
        set: {
          providers: [{ provide: TodoService, useValue: FakeService }],
          imports: [UpperPipe, FakePopup],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(TodoList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should not render the real popup', () => {
    expect(fixture.debugElement.nativeElement.textContent).toContain('COUCOU_FAKE_POPUP');
  });

  it('should display zero todos', () => {
    FakeService.todos.set([]);
    fixture.detectChanges();
    let todoElements = fixture.debugElement.queryAll(By.css('[data-testid="todo"]'));
    expect(todoElements.length).toBe(0);
  });

  it('should display three todos', () => {
    FakeService.todos.set([{ title: 'A' }, { title: 'B' }, { title: 'C' }]);
    fixture.detectChanges();
    let todoElements = fixture.debugElement.queryAll(By.css('[data-testid="todo"]'));
    expect(todoElements.length).toBe(3);
  });

  it('should display the title of a todo', () => {
    FakeService.todos.set([{ title: 'A' }, { title: 'B' }, { title: 'C' }]);
    fixture.detectChanges();
    let todoElements = fixture.debugElement.queryAll(By.css('[data-testid="todo"]'));
    expect(todoElements[0].nativeElement.textContent).toBe('A');
  });

  it('should call service.addTodo on a click', () => {
    FakeService.todos.set([]);
    fixture.detectChanges();

    const spy = vi.spyOn(FakeService, 'addTodo');
    fixture.debugElement.query(By.css('[data-testid="add-todo"]')).nativeElement.click();
    expect(spy).toHaveBeenCalledOnce();
  });
});
