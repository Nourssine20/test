// import { Component } from '@angular/core';
// import { ApiService } from '../services/api.service';  // Use relative path
// import { Router } from '@angular/router';  // Importer Router pour la navigation

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss'],
// })
// export class LoginComponent {
//   email: string = '';
//   password: string = '';

//   constructor(private apiService: ApiService, private router: Router) {}  // Injecter le service Router

//   onLogin() {
//     this.apiService.login(this.email, this.password).subscribe(
//       (response) => {
//         console.log('Login successful', response);
//         // Rediriger vers la page des tâches après une connexion réussie
//         this.router.navigate(['/tasks']);
//       },
//       (error) => {
//         console.error('Login failed', error);
//         // Gérer l'erreur de connexion (par exemple, afficher un message d'erreur)
//       }
//     );
//   }

//   onLogout() {
//     this.apiService.logout().subscribe(
//       (response) => {
//         console.log('Logged out successfully', response);
//         // Rediriger vers la page de login après déconnexion
//         this.router.navigate(['/login']);
//       },
//       (error) => {
//         console.error('Logout failed', error);
//       }
//     );
//   }
// }
