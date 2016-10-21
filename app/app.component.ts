import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  todos: Array<string>;
  constructor() {
    this.todos = ["Todo 1", "Todo 2", "Todo 3"];
  }

  addTodo(todo: string) {
    this.todos.push(todo);
  }
}
