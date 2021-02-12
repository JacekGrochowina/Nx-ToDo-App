import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as TodoListFeature from './todo-list.reducer';
import * as TodoListActions from './todo-list.actions';

@Injectable()
export class TodoListEffects {
  // init$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(TodoListActions.init),
  //     fetch({
  //       run: (action) => {
  //         // Your custom service 'load' logic goes here. For now just return a success action...
  //         return TodoListActions.loadTodoListSuccess({ todoList: [] });
  //       },

  //       onError: (action, error) => {
  //         console.error('Error', error);
  //         return TodoListActions.loadTodoListFailure({ error });
  //       },
  //     })
  //   )
  // );

  constructor(private actions$: Actions) {}
}
