import { Component } from '@angular/core';

import { Todo } from './shared/todo.model';


@Component({
  moduleId: module.id,
  selector: 'todo-item',
  inputs: ['todo'],
  templateUrl: 'todo-item.component.html'
})
export class TodoItem {
  todo: Todo;
  constructor() {}
}
