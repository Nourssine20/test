import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model'; // Define a Task interface or model

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss'],
})
export class TaskDetailsComponent implements OnInit {
  task: Task | null = null;
  taskId: number | null = null;
  loading: boolean = true;
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Get the task ID from the route parameters
    this.route.paramMap.subscribe((params) => {
      this.taskId = Number(params.get('id'));
      if (this.taskId) {
        this.loadTaskDetails(this.taskId);
      } else {
        this.errorMessage = 'Task ID is invalid';
      }
    });
  }

  // Fetch task details
  loadTaskDetails(taskId: number): void {
    this.taskService.getTaskById(taskId).subscribe(
      (data) => {
        this.task = data;
        this.loading = false;
      },
      (error) => {
        this.errorMessage = 'Error fetching task details';
        this.loading = false;
        console.error('Error fetching task details:', error);
      }
    );
  }

  // Optional: Navigate back to the task list page
  goBack(): void {
    this.router.navigate(['/tasks']);
  }
  
}

