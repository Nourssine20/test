import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Router } from '@angular/router';
import { Task } from '../models/task.model'; // Assurez-vous d'avoir défini une interface ou un modèle pour les tâches

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getAll().subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
  }

  goToAddTask() {
    this.router.navigate(['/tasks/add']);
  }

  goToEditTask(id: number) {
    this.router.navigate([`/tasks/edit/${id}`]);
  }

  deleteTask(id: number) {
    if (confirm('Are you sure you want to delete this task?')) {
      this.taskService.delete(id).subscribe(() => {
        this.loadTasks();  // Recharger la liste après suppression
      });
    }
  }

  goToDetails(id: number) {
    this.router.navigate([`/tasks/details/${id}`]);  // Redirection vers la page de détails
  }
}
