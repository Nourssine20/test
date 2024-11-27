import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Import HttpClientModule pour les appels API
import { HttpClientModule } from '@angular/common/http';

// Import ReactiveFormsModule si vous utilisez des formulaires réactifs
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Import des services
import { TaskService } from './services/task.service';

// Importer les composants
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';

@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    EditTaskComponent,   // Declare the components here
    TaskListComponent,   // Declare the components here
    AddTaskComponent ,
    TaskDetailsComponent,    // Declare the components here
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule, // Pour les formulaires réactifs
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    TaskService, // Fournir le service des tâches
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
