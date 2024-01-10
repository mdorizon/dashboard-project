import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { KanbanComponent } from './kanban/kanban.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { KanbanPageComponent } from './pages/kanban-page/kanban-page.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    TodosComponent,
    KanbanComponent
=======
    TodoListComponent,
    KanbanComponent,
    KanbanPageComponent,
    HomeComponent
>>>>>>> fc44934aa130a8fb02103a828c5c06a084298fa3
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
