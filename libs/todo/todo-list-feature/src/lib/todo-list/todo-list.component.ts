import { Component, OnInit } from '@angular/core';
import { State, TodoListEntity, TodoListFacade } from '@todo-app/todo/list-data-access';
import { Task } from '@todo-app/todo/type-util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'todo-app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todosList: TodoListEntity[] = [];
  private unsubscribeSubject = new Subject<void>();

  constructor(private todoListFacade: TodoListFacade) {}

  ngOnInit() {
    this.handleTodoList();
  }

  doneTask(task: Task): void {
    this.todoListFacade.doneTask(task.id);
  }

  private handleTodoList(): void {
    this.todoListFacade.todoList$
      .pipe(takeUntil(this.unsubscribeSubject))
      .subscribe(( todoList: State ) => {
        const entitiesArray: TodoListEntity[]  = Object.keys(todoList.entities).map(key => todoList.entities[key]);
        this.todosList = entitiesArray.filter((item) => !item.done);
      });
  }
}
