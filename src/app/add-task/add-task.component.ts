import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
  taskForm: FormGroup;

  constructor(
    private taskService: TaskService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      priority: [1, [Validators.required, Validators.min(1), Validators.max(5)]],
      due_date: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.taskForm.invalid) {
      return;
    }
    this.taskService.create(this.taskForm.value).subscribe(() => {
      this.router.navigate(['/tasks']);
    });
  }

  onCancel() {
    this.router.navigate(['/tasks']);
  }
}
