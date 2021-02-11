import { createAction, props } from '@ngrx/store';
import { TodoListEntity } from './todo-list.models';

export enum TodoListTypes {
  loadTodoListSuccess = '[TodoList/API] Load TodoList Success',
  loadTodoListFailure = '[TodoList/API] Load TodoList Failure',
  addTodoTask = '[TodoTask] Add TodoTask',
  delTodoTask = '[TodoTask] Del TodoTask',
  doneTodoTask = '[TodoTask] Done TodoTask',
}

export const init = createAction('[TodoList Page] Init');

export const loadTodoListSuccess = createAction(
  TodoListTypes.loadTodoListSuccess,
  props<{ todoList: TodoListEntity[] }>()
);

export const loadTodoListFailure = createAction(
  TodoListTypes.loadTodoListFailure,
  props<{ error: any }>()
);

export const addTodoTask = createAction(
  TodoListTypes.addTodoTask,
  props<{ task: any }>()
);

export const delTodoTask = createAction(
  TodoListTypes.delTodoTask,
  props<{ index: any }>()
);

export const doneTodoTask = createAction(
  TodoListTypes.doneTodoTask,
  props<{ index: any }>()
);
