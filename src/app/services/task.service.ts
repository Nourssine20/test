import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://127.0.0.1:8000/api/tasks'; // Assurez-vous que votre API utilise cette URL.

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  // Récupérer toutes les tâches
  getAll(): Observable<any> {
    return this.http.get(API_URL);
  }

  // Récupérer une tâche par son ID
  getTaskById(id: number): Observable<any> {
    return this.http.get(`${API_URL}/${id}`);
  }

  // Créer une nouvelle tâche
  create(data: any): Observable<any> {
    return this.http.post(API_URL, data);
  }

  // Mettre à jour une tâche existante
  update(id: number, data: any): Observable<any> {
    const updatedData = {
      ...data,
      is_completed: data.is_completed !== undefined ? data.is_completed : false,  // Définir une valeur par défaut si nécessaire
    };

    return this.http.put(`${API_URL}/${id}`, updatedData);
  }

  // Supprimer une tâche
  delete(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/${id}`);
  }

  // Marquer une tâche comme terminée ou non (si l'API le prend en charge)
  toggleCompletion(id: number, completed: boolean): Observable<any> {
    return this.http.patch(`${API_URL}/${id}`, { completed });
  }
}
