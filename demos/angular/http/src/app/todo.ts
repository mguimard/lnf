/*
https://jsonplaceholder.typicode.com/todos

"userId": 2,
"id": 27,
"title": "veritatis pariatur delectus",
"completed": true
*/
export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export type Todos = Todo[];
