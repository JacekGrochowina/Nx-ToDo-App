import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Task } from '@todo-app/type';
import * as TodoListSelectors from './todo-list.selectors';
import { AddTodoTask, DelTodoTask, DoneTodoTask } from './todo-list.actions';
import { EntityState } from '@ngrx/entity';
import { TodoListEntity } from './todo-list.models';
import { AppState } from './todo-list.reducer';

@Injectable()
export class TodoListFacade {

  loaded$ = this.store.pipe(select(TodoListSelectors.getTodoListLoaded));
  todoList$ = this.store.pipe(select(TodoListSelectors.getTodoListState));

  constructor(private store: Store<AppState>) {}

  addTodoTask(newTask: Task): void {
    this.store.dispatch(new AddTodoTask(newTask));
  }

  delTodoTask(taskId: string): void {
    this.store.dispatch(new DelTodoTask(taskId));
  }

  doneTask(taskId: string): void {
    this.store.dispatch(new DoneTodoTask(taskId, { done: true }));
  }
}
