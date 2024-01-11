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
      {content: 'test', icon: 'test'},
      // 'test',
      // 'test'
    ],
    'gray'),
    // new Column('Todo', 
    //   {content: 'test', icon: 'test'},
    //   // new Task({ content: 'Get to work', icon: '🦖'}),
    //   // new Task({ content: 'Pick up groceries', icon: '❤️'}),
    //   // new Task({ content: 'Go home', icon: '🦖'}),
    //   // new Task({ content: 'Fall asleep', icon: '❤️'})
    // 'brown'),
    // new Column('Done', 
    //   {content: 'test', icon: 'test'},
    //   // new Task({ content: 'Get up', icon: '🦖'}),
    //   // new Task({ content: 'Brush teeth', icon: '❤️'}),
    //   // new Task({ content: 'Take a shower', icon: '🦖'}),
    //   // new Task({ content: 'Check e-mail', icon: '🦖'}),
    //   // new Task({ content: 'Walk dog', icon: '❤️'})
    // 'orange'),
    // new Column('Done', 
    //   {content: 'test', icon: 'test'},
    // 'yellow'),
    // new Column('Done', 
    //   {content: 'test', icon: 'test'},
    // 'green'),
    // new Column('Done', 
    //   {content: 'test', icon: 'test'},
    // 'blue'),
    // new Column('Done', 
    //   {content: 'test', icon: 'test'},
    // 'purple'),
    // new Column('Done', 
    //   {content: 'test', icon: 'test'},
    // 'pink'),
    // new Column('Done', 
    //   {content: 'test', icon: 'test'},
    // 'red')
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
