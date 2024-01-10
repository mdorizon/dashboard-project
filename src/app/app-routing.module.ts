import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';

import { KanbanPageComponent } from './pages/kanban-page/kanban-page.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { 
    path: '', 
    component: TodoComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'kanban',
    component: KanbanPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
