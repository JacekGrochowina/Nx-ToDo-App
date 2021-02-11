import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { TodoListFacade } from '@todo-app/todo-list';

interface Task {
  id: string;
  content: string;
}

@Component({
  selector: 'todo-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  todosList: Task[] = [
    { id: this.newId(), content: 'Eat pizza' },
    { id: this.newId(), content: 'Watch TV' },
    { id: this.newId(), content: 'Go a walk' },
  ];

  donesList: Task[] = [];

  newTaskFormGroup = this.fb.group({
    taskContent: ['', [
      Validators.required
    ]]
  });

  constructor(
    private fb: FormBuilder,
    private todoListFacade: TodoListFacade
  ) {}

  ngOnInit() {
    this.todoListFacade.init();
    // this.todoListFacade.addTodoTask();
  }

  newId(): string {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  addNewTask(): void {
    const newTaskContent: string = this.newTaskFormGroup.value.taskContent;
    const newTask: Task = {
      id: this.newId(),
      content: newTaskContent
    }

    this.todosList.push(newTask);
    this.newTaskFormGroup.reset();

    this.todoListFacade.addTodoTask();
  }

  doneTask(todo: Task): void {
    this.todosList.forEach((todoItem: Task, todoItemIndex: number) => {
      if(todoItem.id === todo.id) {
        this.todosList.splice(todoItemIndex, 1);
        this.donesList.push(todo);
      }
    });
  }

  deleteTask(done: Task): void {
    this.donesList.forEach((doneItem: Task, doneItemIndex: number) => {
      if(doneItem.id === done.id) {
        this.donesList.splice(doneItemIndex, 1);
      }
    });
  }
}
