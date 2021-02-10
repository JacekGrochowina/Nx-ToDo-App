import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as TodoListActions from './todo-list.actions';
import { TodoListEntity } from './todo-list.models';

export const TODO_LIST_FEATURE_KEY = 'todoList';

export interface State extends EntityState<TodoListEntity> {
  selectedId?: string | number; // which TodoList record has been selected
  loaded: boolean; // has the TodoList list been loaded
  error?: string | null; // last known error (if any)
}

export interface TodoListPartialState {
  readonly [TODO_LIST_FEATURE_KEY]: State;
}

export const todoListAdapter: EntityAdapter<TodoListEntity> = createEntityAdapter<TodoListEntity>();

export const initialState: State = todoListAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const todoListReducer = createReducer(
  initialState,
  on(TodoListActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(TodoListActions.loadTodoListSuccess, (state, { todoList }) =>
    todoListAdapter.setAll(todoList, { ...state, loaded: true })
  ),
  on(TodoListActions.loadTodoListFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return todoListReducer(state, action);
}
