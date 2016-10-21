import { Component } from '@angular/core';

import { Todo } from './todos/shared/todo.model';


@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  todos: Array<string>;
  constructor() {
    this.todos = [
      new Todo("Todo 1", "Todo 1 Description", "Micah"),
      new Todo("Todo 2", "Todo 2 Description", "Micah"),
      new Todo("Todo 3", "Todo 3 Description", "Micah")
    ];
  }
}
