import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { Board } from '../models/board.model';
import { Column } from '../models/column.model';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrl: './kanban.component.scss',
})
export class KanbanComponent {

  board: Board = new Board('Test board', [
    new Column(
    'Ideas',
    [
      new Task([
        { text: 'Get to work', icon: '🚧' },
        { text: 'Pick up groceries', icon: '🫐' },
        { text: 'Go home', icon: '🏠' },
        { text: 'Fall asleep', icon: '💤' }
      ])
    ],
    'gray'
    ),
    new Column('Todo',
    [
      new Task([
        { text: 'Get up', icon: '🛏️' },
        { text: 'Brush teeth', icon: '🪥' },
        { text: 'Take a shower', icon: '🚿' },
        { text: 'Check e-mail', icon: '✉️' },
        { text: 'Walk dog', icon: '🐶' }
      ])
    ],
    'brown'),
    new Column('Done',
    [
      new Task([
        { text: 'Get up', icon: '🛏️' },
        { text: 'Brush teeth', icon: '🪥' },
        { text: 'Check e-mail', icon: '✉️' },
        { text: 'Walk dog', icon: '🐶' }
      ])
    ],
    'orange'),
    new Column('Done',
    [
      new Task([

      ])
    ],
    'yellow'),
    new Column('Done',
    [
      new Task([

      ])
    ],
    'green'),
    new Column('Done',
    [
      new Task([

      ])
    ],
    'blue'),
    new Column('Done',
    [
      new Task([

      ])
    ],
    'purple'),
    new Column('Done',
    [
      new Task([

      ])
    ],
    'pink'),
    new Column('Done',
    [
      new Task([

      ])
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
