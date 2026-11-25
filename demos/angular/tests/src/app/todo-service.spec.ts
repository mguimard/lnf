import { TestBed } from '@angular/core/testing';
import { TodoService } from './todo-service';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a default value', () => {
    expect(service.todos()).toStrictEqual([{ title: 'ceci' }, { title: 'cela' }]);
  });

  it('should update the signal when addTodo is called', () => {
    service.addTodo({ title: 'coucou' });

    expect(service.todos()).toStrictEqual([
      { title: 'ceci' },
      { title: 'cela' },
      { title: 'coucou' },
    ]);
  });
});
