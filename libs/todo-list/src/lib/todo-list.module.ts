import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromTodoList from './+state/todo-list.reducer';
import { TodoListEffects } from './+state/todo-list.effects';
import { TodoListFacade } from './+state/todo-list.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromTodoList.TODO_LIST_FEATURE_KEY,
      fromTodoList.todoListReducer
    ),
    EffectsModule.forFeature([TodoListEffects]),
  ],
  providers: [TodoListFacade],
})
export class TodoListModule {}
