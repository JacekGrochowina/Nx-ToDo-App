import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { State, TodoListEntity, TodoListFacade } from '@todo-app/todo-list';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Task } from '@todo-app/type';

@Component({
  selector: 'todo-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  todosList: TodoListEntity[] = [];
  donesList: TodoListEntity[] = [];

  newTaskFormGroup = this.fb.group({
    taskContent: ['', [
      Validators.required
    ]]
  });

  private unsubscribeSubject = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private todoListFacade: TodoListFacade
  ) {}

  ngOnInit() {
    this.handleTodoList();
  }

  addNewTask(): void {
    this.todoListFacade.addTodoTask(this.generateNewTask());
    this.newTaskFormGroup.reset();
  }

  doneTask(task: Task): void {
    this.todoListFacade.doneTask(task.id);
  }

  deleteTask(task: Task): void {
    this.todoListFacade.delTodoTask(task.id);
  }

  private newId(): string {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  private handleTodoList(): void {
    this.todoListFacade.todoList$
      .pipe(takeUntil(this.unsubscribeSubject))
      .subscribe(( todoList: State ) => {
        const entitiesArray: TodoListEntity[]  = Object.keys(todoList.entities).map(key => todoList.entities[key]);
        this.todosList = entitiesArray.filter((item) => !item.done);
        this.donesList = entitiesArray.filter((item) => item.done);
      });
  }

  private generateNewTask(): Task {
    return {
      id: this.newId(),
      content: this.newTaskFormGroup.value.taskContent,
      done: false
    }
  }
}
