import { Component, Input } from '@angular/core';
import { Alumno } from '../../interface/Alumno';

@Component({
  selector: 'app-alumnos-list',
  standalone: false,
  templateUrl: './alumnos-list.html',
  styleUrl: './alumnos-list.css'
})
export class AlumnosList {
  @Input() alumnos: Alumno[] = [];
}
