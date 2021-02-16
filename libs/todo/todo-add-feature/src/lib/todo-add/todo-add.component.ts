import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TodoListFacade } from '@todo-app/todo/list-data-access';
import { Task } from '@todo-app/todo/type-util';

@Component({
  selector: 'todo-app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  newTaskFormGroup = this.fb.group({
    taskContent: ['', [
      Validators.required
    ]]
  });

  constructor(
    private fb: FormBuilder,
    private todoListFacade: TodoListFacade
  ) { }

  ngOnInit(): void {
  }

  addNewTask(): void {
    this.todoListFacade.addTodoTask(this.generateNewTask());
    this.newTaskFormGroup.reset();
  }

  private newId(): string {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  private generateNewTask(): Task {
    return {
      id: this.newId(),
      content: this.newTaskFormGroup.value.taskContent,
      done: false
    }
  }
}
