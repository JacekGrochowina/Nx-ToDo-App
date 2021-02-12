import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as TodoListActions from './todo-list.actions';
import * as TodoListFeature from './todo-list.reducer';
import * as TodoListSelectors from './todo-list.selectors';

@Injectable()
export class TodoListFacade {

  loaded$ = this.store.pipe(select(TodoListSelectors.getTodoListLoaded));
  todoList$ = this.store.pipe(select(TodoListSelectors.getTodoListState));

  constructor(private store: Store) {}

  // init() {
  //   this.store.dispatch(TodoListActions.init());
  // }

  addTodoTask(newTaskContent: any) {
    this.store.dispatch(TodoListActions.addTodoTask({ todoList: newTaskContent }))
  }
}
