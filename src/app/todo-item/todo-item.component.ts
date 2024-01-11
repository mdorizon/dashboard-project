import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { Column } from '../models/column.model';
import { Board } from '../models/board.model';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent implements OnInit{

@Input()  todo: Todo 
@Output() todoClicked: EventEmitter<void> = new EventEmitter()
@Output() editClicked: EventEmitter<void> = new EventEmitter()
@Output() deleteClicked: EventEmitter<void> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
   
  }

  onTodoClicked(){
    this.todoClicked.emit()
  }

  onEditClicked(){
    this.editClicked.emit()
  }

  onDeleteClicked(){
    this.deleteClicked.emit()
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

