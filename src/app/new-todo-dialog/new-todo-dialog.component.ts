import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../shared/todo.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-todo-dialog',
  templateUrl: './new-todo-dialog.component.html',
  styleUrl: './new-todo-dialog.component.scss'
})
export class NewTodoDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<NewTodoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public todo: Todo) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close()
  }

  onFormSubmit(form:NgForm) {
    if(form.invalid) return
    const updatedTodo = {
      ...this.todo,
      ...form.value
    }
    this.dialogRef.close(updatedTodo)
  }
}
