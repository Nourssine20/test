import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// Import des pages nécessaires
import { HomePage } from './home/home.page';
import { TaskListComponent } from './task-list/task-list.component'; // Page pour la liste des tâches
import { AddTaskComponent } from './add-task/add-task.component'; // Page pour l'ajout de tâche
import { EditTaskComponent } from './edit-task/edit-task.component'; // Page pour l'édition d'une tâche
import { TasksComponent } from './tasks/tasks.component';
import { TaskDetailsComponent } from './task-details/task-details.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tasks',
    component: TaskListComponent // Page qui liste toutes les tâches
  },
  {
    path: 'tasks/add',
    component: AddTaskComponent // Page pour ajouter une nouvelle tâche
  },
  {
    path: 'tasks/edit/:id',
    component: EditTaskComponent // Page pour éditer une tâche existante
  },
  { path: 'tasks/:id', component: TaskDetailsComponent },
  // { path: 'login', component: LoginComponent },
  // { path: '', redirectTo: '/login', pathMatch: 'full' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
