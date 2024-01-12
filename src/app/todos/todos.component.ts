import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../shared/todo.model'
import { DataService } from '../shared/data.service';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditTodoDialogComponent } from '../edit-todo-dialog/edit-todo-dialog.component';
import { NewTodoDialogComponent } from '../new-todo-dialog/new-todo-dialog.component';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { Board } from '../models/board.model';
import { Column } from '../models/column.model';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit{

  @Output() newTodoClicked: EventEmitter<void> = new EventEmitter()

  onNewTodoClicked(){
    this.newTodoClicked.emit()
  }

  todos : Todo[]
  showValidationErrors: boolean

  constructor(private dataService: DataService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos()
  }

  onFormSubmit(form: NgForm) {
    
    console.log("FORM SUBMITTED")
    console.log(form)

    if(form.invalid) return this.showValidationErrors = true
    
    this.dataService.addTodo(new Todo(form.value.text))

    this.showValidationErrors = false

    form.reset()
  }

  toggleCompelted(todo: Todo) {
    todo.completed = !todo.completed;
  }

  editTodo(todo: Todo){

    const index = this.todos.indexOf(todo)

    let dialogRef = this.dialog.open(EditTodoDialogComponent, {
      width: '700px',
      data: todo
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dataService.updateTodo(index, result)
      }
    })
  }

  newTodo(todo: Todo){

    const index = this.todos.indexOf(todo)

    let dialogRef = this.dialog.open(NewTodoDialogComponent, {
      width: '700px',
      data: todo
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dataService.updateTodo(index, result)
      }
    })
  }
  

  deleteTodo(todo: Todo){
    const index = this.todos.indexOf(todo)
    this.dataService.deleteTodo(index)
  }

  board: Board = new Board('Test board', [
    new Column('Todo List', [
      "Some random idea",
      "This is another random ideaThis is another random ideaThis is another random ideaThis is another random idea",
      "build an awesome application"
    ],
    'red')
  ]);

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
