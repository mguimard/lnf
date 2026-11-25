import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TodoList } from './todo-item';

describe('TodoItem V2', () => {
  let component: TodoList;
  let fixture: ComponentFixture<TodoList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoList],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoList);
    component = fixture.componentInstance;

    await fixture.whenStable();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should call service.addTodo on a click', () => {
    const spy2 = vi.spyOn(component.service, 'addTodo');
    fixture.debugElement.query(By.css('[data-testid="add-todo"]')).nativeElement.click();
    expect(spy2).toHaveBeenCalledOnce();
  });
});
