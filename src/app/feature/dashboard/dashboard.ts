import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth/auth';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
 listItems = [
  {name:'Inicio', icon:'home', route:'/dashboard'},
  {name:'Alumnos', icon:'school', route:'alumnos'},
  {name:'Cursos', icon:'book', route:'cursos'},
  {name:'Clases', icon:'class', route:'clases'}
 ];

 constructor(private authService: AuthService) {}
  logout() {
    this.authService.logout();
  }
 
}
