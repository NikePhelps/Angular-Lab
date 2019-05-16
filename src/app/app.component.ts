import { Component } from '@angular/core';
import { TODO } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularlab';
  toDo: TODO[] = [
    {
      task: "Wash the dishes",
      completed: false
    },
    {
      task: "Pay bills",
      completed: true
    },
    {
      task: "Walk the dog",
      completed: false
    },
    {
      task: "Buy groceries",
      completed: true
    }
  ]
}
