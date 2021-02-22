import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ShellRoutingModule } from './shell-routing.module';
import { TodoTodoListFeatureModule } from '@todo-app/todo/todo-list-feature';
import { TodoTodoAddFeatureModule } from '@todo-app/todo/todo-add-feature';
import { ShellComponent } from './shell/shell.component';

@NgModule({
  imports: [
    CommonModule,
    ShellRoutingModule,
    StoreDevtoolsModule.instrument(),
  ],
  exports: [
    CommonModule,
    TodoTodoListFeatureModule,
    TodoTodoAddFeatureModule,
  ],
  declarations: [ShellComponent]
})
export class TodoShellModule {}
