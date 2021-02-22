import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoPageComponent } from './containers/todo-page/todo-page.component';
import { TodoShellModule } from '@todo-app/todo/shell';
import { TodoTodoRoutingModule } from './todo-todo-routing.module';
import { TodoTodoListFeatureModule } from '@todo-app/todo/todo-list-feature';

@NgModule({
  imports: [
    CommonModule,
    TodoTodoRoutingModule,
    TodoTodoListFeatureModule,
    TodoShellModule
  ],
  declarations: [TodoPageComponent],
  exports: [TodoPageComponent]
})
export class TodoTodoFeatureModule {}
