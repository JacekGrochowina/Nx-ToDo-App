import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as TodoListActions from './todo-list.actions';
import * as TodoListFeature from './todo-list.reducer';
import * as TodoListSelectors from './todo-list.selectors';

@Injectable()
export class TodoListFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(TodoListSelectors.getTodoListLoaded));
  allTodoList$ = this.store.pipe(select(TodoListSelectors.getAllTodoList));
  selectedTodoList$ = this.store.pipe(select(TodoListSelectors.getSelected));

  constructor(private store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(TodoListActions.init());
  }

  addTodoTask() {
    this.store.dispatch(TodoListActions.addTodoTask({ task: 'test' }))
  }
}
