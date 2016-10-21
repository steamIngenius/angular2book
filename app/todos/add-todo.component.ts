import { Component } from '@angular/core';

import { Todo } from './shared/todo.model';


@Component({
  moduleId: module.id,
  selector: 'add-todo',
  inputs: ['todos'],
  templateUrl: 'add-todo.component.html'
})
export class AddTodo {
  todos: Array<Todo>;
  constructor() {}

  addTodo(
    title: string,
    description: string,
    responsible: string
  ) {
    this.todos.push(new Todo(title, description, responsible));
  }
}
