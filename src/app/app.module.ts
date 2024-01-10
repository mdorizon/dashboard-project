import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './pages/home/app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { KanbanComponent } from './kanban/kanban.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { KanbanPageComponent } from './pages/kanban-page/kanban-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    KanbanComponent,
    KanbanPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
