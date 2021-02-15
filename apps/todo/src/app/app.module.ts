import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '@todo-app/material';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { TodoListFacade } from '@todo-app/todo-list';
import { todoListReducer } from '@todo-app/todo-list';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    StoreModule.forRoot({
      todoList: todoListReducer
    }),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [TodoListFacade],
  bootstrap: [AppComponent],
})
export class AppModule {}
