import { Component, OnInit } from '@angular/core';
import { State, TodoListEntity, TodoListFacade } from '@todo-app/todo/list-data-access';
import { Task } from '@todo-app/todo/type-util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'todo-app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.scss']
})
export class DoneListComponent implements OnInit {

  donesList: TodoListEntity[] = [];
  private unsubscribeSubject = new Subject<void>();

  constructor(private todoListFacade: TodoListFacade) {}

  ngOnInit() {
    this.handleTodoList();
  }

  deleteTask(task: Task): void {
    this.todoListFacade.delTodoTask(task.id);
  }

  private handleTodoList(): void {
    this.todoListFacade.todoList$
      .pipe(takeUntil(this.unsubscribeSubject))
      .subscribe(( todoList: State ) => {
        const entitiesArray: TodoListEntity[]  = Object.keys(todoList.entities).map(key => todoList.entities[key]);
        this.donesList = entitiesArray.filter((item) => item.done);
      });
  }
}
