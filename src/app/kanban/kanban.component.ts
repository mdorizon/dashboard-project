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
      new Task(
        [
          'Some random idea',
          'This is another random idea',
          'build an awesome application'
        ],
        [
          '🦖',
          '⭐',
          '❤️'
        ]
      )
    ],
    'gray'
    ),
    new Column('Todo',
    [
      new Task(
        [
          'Get to work',
          'Pick up groceries',
          'Go home',
          'Fall asleep'
        ],
        [
          '🚧',
          '🫐',
          '🏠',
          '💤'
        ]
      )
    ],
    'brown'),
    new Column('Done',
    [
      new Task(
        [
          'Get up',
          'Brush teeth',
          'Take a shower',
          'Check e-mail',
          'Walk dog'
        ],
        [
          '🛏️',
          '🪥',
          '🚿',
          '✉️',
          '🐶'
        ]
      )
    ],
    'orange'),
    new Column('Done',
    [
      new Task(
        [

        ],
        [

        ]
      )
    ],
    'yellow'),
    new Column('Done',
    [
      new Task(
        [

        ],
        [
          
        ]
      )
    ],
    'green'),
    new Column('Done',
    [
      new Task(
        [

        ],
        [
          
        ]
      )
    ],
    'blue'),
    new Column('Done',
    [
      new Task(
        [

        ],
        [
          
        ]
      )
    ],
    'purple'),
    new Column('Done',
    [
      new Task(
        [

        ],
        [
          
        ]
      )
    ],
    'pink'),
    new Column('Done',
    [
      new Task(
        [

        ],
        [
          
        ]
      )
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
