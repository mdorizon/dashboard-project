import { Component, ElementRef, ViewChild, ViewChildren, QueryList, Query } from '@angular/core';
import { CdkDragStart, CdkDragMove, CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { Board } from '../models/board.model';
import { Column } from '../models/column.model';
import { Task } from '../models/task.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrl: './kanban.component.scss',
})
export class KanbanComponent {
  @ViewChildren('taskElement') taskElements: QueryList<ElementRef<HTMLElement>>;
  @ViewChildren('formInput') formInputs: QueryList<ElementRef<HTMLInputElement>>;

  // ngAfterViewInit() {
  //   console.log(this.formInputs);
  // }

  board: Board = new Board('Développement', '💻',[
    new Column(
    'Ideas',
    [
      new Task(
        1,
        [
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
      new Task(
        2,
        [
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
      new Task(
        3,
        [
        { text: 'Get up', icon: '🛏️' },
        { text: 'Brush teeth', icon: '🪥' },
        { text: 'Check e-mail', icon: '✉️' },
        { text: 'Walk dog', icon: '🐶' }
      ])
    ],
    'orange'),
    // new Column('Done',
    // [
    //   new Task([

    //   ])
    // ],
    // 'yellow'),
    // new Column('Done',
    // [
    //   new Task([

    //   ])
    // ],
    // 'green'),
    // new Column('Done',
    // [
    //   new Task([

    //   ])
    // ],
    // 'blue'),
    // new Column('Done',
    // [
    //   new Task([

    //   ])
    // ],
    // 'purple'),
    // new Column('Done',
    // [
    //   new Task([

    //   ])
    // ],
    // 'pink'),
    // new Column('Done',
    // [
    //   new Task([

    //   ])
    // ],
    // 'red')
  ]);
  
  formValue: string = 'default';

  onFormSubmit(event: Event, form: NgForm, taskIndex: number, columnIndex: number) {
    const taskElement = (event.target as HTMLElement).closest('.task');
    const textElement = taskElement?.querySelector('.tasks-content-text');
    const formElement = taskElement?.querySelector('.tasks-content-form');
    const inputElement = taskElement?.querySelector('.tasks-content-input');

    const column = this.board.columns[columnIndex]
    const task = column.tasks[0]
    const content = task.content[taskIndex]

    // inputElement?.focus();

    textElement?.classList.remove('hidden');
    formElement?.classList.add('hidden');
    
    content.text = form.value.text
  }

  onEditClicked(event: Event, taskId: number, columnIndex: number) {
    const taskElement = (event.target as HTMLElement).closest('.task');
    const textElement = taskElement?.querySelector('.tasks-content-text');
    const formElement = taskElement?.querySelector('.tasks-content-form');
    
    const column = this.board.columns[columnIndex];
    const task = column.tasks[0];
    const content = task.content[taskId];

    // @ViewChild('formInput',{static:false, read: ElementRef}) formInput: ElementRef;
    
    textElement?.classList.add('hidden');
    formElement?.classList.remove('hidden');

    const taskElementsArray = this.taskElements.toArray();
    const formInputsArray = this.formInputs.toArray();

    // Recherchez l'index de la tâche avec l'ID spécifié dans toutes les colonnes
    const taskIndex = task.id

    console.log(taskIndex)
    console.log(this.board.columns[taskIndex])
    console.log(column)

    // if (taskIndex !== -1) {
    //   const taskElement = taskElementsArray[taskIndex];
    //   const formInputForTask = formInputsArray[taskIndex];
    //   console.log(formInputForTask, taskElement);
    // }
    
    // this.formInput.nativeElement.focus();
    this.formValue = content.text;
  }

  // let colIndex = 0
  // let taskIndex = 0

  // emoTest(taskId: number, columnIndex: number) {
  //   const column = this.board.columns[columnIndex]
  //   const task = column.tasks[0]
  //   const content = task.content[taskIndex]

  //   console.log(content.icon + '  ' + content.text)

  //   const panel = (document.querySelector('.emoji-mart') as HTMLInputElement);
  //   panel!.classList.add('visible');

  //   // colIndex = columnIndex
  //   // taskIndex = taskIndex
  // };
  
  // addEmoji(select: any) {
  //   const column = colIndex
  //   const task = column.tasks[0]
  //   const content = taskIndex

  //   console.log(content.icon + '  ' + content.text)

  //   const emoji = select.emoji.native;

  //   content.icon = emoji
  //   const panel = document.querySelector('.emoji-mart');
  //   panel!.classList.remove('visible');
  // };

  drop(event: CdkDragDrop<{ text: string; icon: string; }[]>) {
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
