import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../services/task.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss'],
})
export class EditTaskComponent implements OnInit {
  taskId!: number;
  taskForm: FormGroup;

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    // Initialisation du formulaire avec validation
    this.taskForm = this.fb.group({
      title: ['', Validators.required],  // Validation du titre
      description: ['', Validators.required],  // Validation de la description
      priority: [1, [Validators.required, Validators.min(1), Validators.max(5)]],  // Validation de la priorité
      due_date: ['', Validators.required],  // Validation de la date d'échéance
    });
  }

  ngOnInit() {
    // Récupérer l'ID de la tâche à partir des paramètres de la route
    this.taskId = +this.route.snapshot.paramMap.get('id')!;
    this.loadTask();
  }

  // Fonction pour charger les détails de la tâche
  loadTask() {
    this.taskService.getTaskById(this.taskId).subscribe((task) => {
      // Mettre à jour les valeurs du formulaire avec les données de la tâche
      this.taskForm.patchValue({
        title: task.title,
        description: task.description,
        priority: task.priority,
        due_date: task.due_date, // Assurez-vous que la date est bien formatée au besoin
      });
    });
  }

  // Fonction d'envoi du formulaire
  onSubmit() {
    if (this.taskForm.invalid) {
      return;
    }

    // Préparer les données du formulaire pour l'envoi
    const formData = {
      ...this.taskForm.value,
      due_date: new Date(this.taskForm.value.due_date).toISOString() // Conversion de la date en format ISO si nécessaire
    };

    // Appel à la méthode update de TaskService
    this.taskService.update(this.taskId, formData).subscribe(
      () => {
        // Naviguer vers la liste des tâches après une mise à jour réussie
        this.router.navigate(['/tasks']);
      },
      (error) => {
        // Gestion des erreurs
        console.error('Error updating task:', error);
      }
    );
  }

  // Fonction pour annuler l'édition
  onCancel() {
    this.router.navigate(['/tasks']);
  }
}
