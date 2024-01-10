import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Todo } from '../shared/todo.model';
import { Inject } from '@angular/core'

@Component({
  selector: 'app-edit-todo-dialog',
  templateUrl: './edit-todo-dialog.component.html',
  styleUrl: './edit-todo-dialog.component.scss'
})
export class EditTodoDialogComponent implements OnInit{
  
    constructor(
      public dialogRef: MatDialogRef<EditTodoDialogComponent>,
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
  
  
