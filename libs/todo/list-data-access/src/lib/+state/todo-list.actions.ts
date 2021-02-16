import { Action } from '@ngrx/store';
import { Task } from '@todo-app/todo/type-util';

export enum TodoListTypes {
  addTodoTask = '[TodoTask] Add TodoTask',
  delTodoTask = '[TodoTask] Del TodoTask',
  doneTodoTask = '[TodoTask] Done TodoTask',
}

export class AddTodoTask implements Action {
  readonly type = TodoListTypes.addTodoTask;

  constructor(public newTask: Task) {}
}

export class DelTodoTask implements Action {
  readonly type = TodoListTypes.delTodoTask;
  
  constructor(public id: string) {}
}

export class DoneTodoTask implements Action {
  readonly type = TodoListTypes.doneTodoTask;

  constructor(
    public id: string,
    public changes: Partial<Task>
  ) {}
}

export type TodoActions
  = AddTodoTask
  | DelTodoTask
  | DoneTodoTask;
