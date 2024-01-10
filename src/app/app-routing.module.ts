import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KanbanPageComponent } from './pages/kanban-page/kanban-page.component';
import { HomeComponent } from './pages/home/home.component';

<<<<<<< HEAD

const routes: Routes = [];
=======
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'kanban',
    component: KanbanPageComponent
  }
];
>>>>>>> fc44934aa130a8fb02103a828c5c06a084298fa3

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
