import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { TodoListComponent } from './todo-list/todo-list.component';
import { DoneListComponent } from './done-list/done-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TodoListDataAccessModule } from '@todo-app/todo/list-data-access';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    TodoListDataAccessModule,
  ],
  declarations: [
    TodoListComponent,
    DoneListComponent,
  ],
  exports: [
    TodoListComponent,
    DoneListComponent,
  ]
})
export class TodoTodoListFeatureModule {}
