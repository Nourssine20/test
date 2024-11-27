// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Router } from '@angular/router';
// import { environment } from 'src/environments/environment';
// import { JwtHelperService } from '@auth0/angular-jwt';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   private apiUrl = `${environment.apiUrl}/api`; // URL de l'API Laravel

//   constructor(private http: HttpClient, private router: Router, private jwtHelper: JwtHelperService) {}

//   login(email: string, password: string): Observable<any> {
//     return this.http.post<any>(`${this.apiUrl}/login`, { email, password });
//   }

//   logout(): Observable<any> {
//     return this.http.post<any>(`${this.apiUrl}/logout`, {}, this.getAuthHeaders());
//   }

//   private getAuthHeaders() {
//     const token = this.getToken();
//     return {
//       headers: new HttpHeaders({
//         'Authorization': `Bearer ${token}`
//       })
//     };
//   }

//   // Récupère le token JWT
//   getToken(): string {
//     return localStorage.getItem('token') || '';
//   }

//   // Vérifie si l'utilisateur est authentifié
//   isAuthenticated(): boolean {
//     const token = this.getToken();
//     return !this.jwtHelper.isTokenExpired(token);
//   }

//   // Sauvegarde du token dans le localStorage
//   saveToken(token: string): void {
//     localStorage.setItem('token', token);
//   }

//   // Effacer le token (logout)
//   clearToken(): void {
//     localStorage.removeItem('token');
//   }
// }
