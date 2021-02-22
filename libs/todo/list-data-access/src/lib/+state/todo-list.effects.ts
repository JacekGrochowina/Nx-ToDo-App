import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as TodoListFeature from './todo-list.reducer';
import * as TodoListActions from './todo-list.actions';

@Injectable()
export class TodoListEffects {
  constructor(private actions$: Actions) {}
}
