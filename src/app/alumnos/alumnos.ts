import { Component } from '@angular/core';
import { Alumno } from './interface/Alumno';

@Component({
  selector: 'app-alumnos',
  standalone: false,
  templateUrl: './alumnos.html',
  styleUrl: './alumnos.css'
})
export class Alumnos {
  alumnos: Alumno[] = [
    { nombre: 'Juan', apellido: 'Pérez', edad: 20 },
    { nombre: 'María', apellido: 'Gómez', edad: 22 },
    { nombre: 'Luis', apellido: 'Rodríguez', edad: 19 }
  ];

  onAddAlumno(newAlumno: Alumno) {
    this.alumnos.push(newAlumno);
  }
}
