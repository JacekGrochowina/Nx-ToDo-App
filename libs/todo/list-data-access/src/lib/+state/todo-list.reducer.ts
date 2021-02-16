import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as TodoListActions from './todo-list.actions';
import { TodoListEntity } from './todo-list.models';
import { TodoListTypes } from './todo-list.actions';

export const TODO_LIST_FEATURE_KEY = 'todoList';

export interface AppState {
  todoList: EntityState<TodoListEntity>;
}

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
  loaded: false,
});

export function todoListReducer(
  state: State = initialState,
  action: TodoListActions.TodoActions
) {
  switch(action.type) {
    
    case TodoListTypes.addTodoTask:
      return todoListAdapter.addOne(action.newTask, state);

    case TodoListTypes.delTodoTask:
      return todoListAdapter.removeOne(action.id, state);

    case TodoListTypes.doneTodoTask:
      return todoListAdapter.updateOne({
        id: action.id,
        changes: action.changes
      }, state);

    default:
      return state;

  }
}
