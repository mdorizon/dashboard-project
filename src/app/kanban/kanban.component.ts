import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { Board } from '../models/board.model';
import { Column } from '../models/column.model';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrl: './kanban.component.scss',

})
export class KanbanComponent {

  board: Board = new Board('Test board', [
    new Column('Ideas', [
      "Some random idea",
      "This is another random ideaThis is another random ideaThis is another random ideaThis is another random idea",
      "build an awesome application"
    ],
    'gray'),
    new Column('Todo', [
      'Get to work',
      'Pick up groceries',
      'Go home',
      'Fall asleep'
    ],
    'brown'),
    new Column('Done', [
      'Get up',
      'Brush teeth',
      'Take a shower',
      'Check e-mail',
      'Walk dog'
    ],
    'orange'),
    new Column('Done', [
    ],
    'yellow'),
    new Column('Done', [
    ],
    'green'),
    new Column('Done', [
    ],
    'blue'),
    new Column('Done', [
    ],
    'purple'),
    new Column('Done', [
    ],
    'pink'),
    new Column('Done', [
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
