import { Component } from '@angular/core';

import { Todo } from './shared/todo.model';


@Component({
  moduleId: module.id,
  selector: 'todos-list',
  inputs: ['todos'],
  templateUrl: 'todos-list.component.html'
})
export class TodosList {
  todos: Array<Todo>;
  constructor() {}
}
