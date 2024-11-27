import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks: any[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.loadTasks();
  }

  // Charger toutes les tâches
  loadTasks() {
    this.taskService.getAll().subscribe(
      (data) => {
        this.tasks = data; // Supposons que l'API retourne un tableau de tâches
      },
      (error) => {
        console.error('Erreur lors du chargement des tâches :', error);
      }
    );
  }

  // Ajouter une nouvelle tâche
  addTask(newTask: any) {
    this.taskService.create(newTask).subscribe(
      () => this.loadTasks(),
      (error) => console.error('Erreur lors de l’ajout de la tâche :', error)
    );
  }

  // Modifier une tâche
  editTask(id: number, updatedTask: any) {
    this.taskService.update(id, updatedTask).subscribe(
      () => this.loadTasks(),
      (error) => console.error('Erreur lors de la mise à jour de la tâche :', error)
    );
  }

  // Supprimer une tâche
  deleteTask(id: number) {
    this.taskService.delete(id).subscribe(
      () => this.loadTasks(),
      (error) => console.error('Erreur lors de la suppression de la tâche :', error)
    );
  }

  // Marquer comme terminée / rouvrir une tâche
  toggleCompletion(id: number, completed: boolean) {
    this.taskService.toggleCompletion(id, completed).subscribe(
      () => this.loadTasks(),
      (error) => console.error('Erreur lors de la mise à jour du statut :', error)
    );
  }
}
