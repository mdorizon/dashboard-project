import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './pages/home/app.component';
import { KanbanPageComponent } from './pages/kanban-page/kanban-page.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'kanbanPage',
    component: KanbanPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
