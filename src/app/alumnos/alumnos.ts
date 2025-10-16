import { Component, OnInit} from '@angular/core';
import { Alumno } from './interface/Alumno';

@Component({
  selector: 'app-alumnos',
  standalone: false,
  templateUrl: './alumnos.html',
  styleUrl: './alumnos.css'
})
export class Alumnos implements OnInit {
  alumnosList: Alumno[] = [
    {id:1, nombre: 'JUAN', apellido: 'Pérez', edad: 20 },
    {id:2, nombre: 'María', apellido: 'Gómez', edad: 22 },
    {id:3, nombre: 'Luis', apellido: 'Rodríguez', edad: 21 },
    {id:4, nombre: 'Ana', apellido: 'López', edad: 23 },
    {id:5, nombre: 'Carlos', apellido: 'Martínez', edad: 24 },
    {id:6, nombre: 'Sofía', apellido: 'Hernández', edad: 22 },
    {id:7, nombre: 'Miguel', apellido: 'García', edad: 20 },
    {id:8, nombre: 'Lucía', apellido: 'Fernández', edad: 21 },
    {id:9, nombre: 'Javier', apellido: 'Sánchez', edad: 23 },
    {id:10, nombre: 'Elena', apellido: 'Ramírez', edad: 24 }
  ];

  onAddAlumno(alumno: Alumno) {
    console.log("si vamos");
    const nuevo: Alumno = {
      ...alumno,
      id: this.alumnosList.length + 1
    };
    this.alumnosList.push(nuevo);
  }

  ngOnInit(): void {
    // inicialización si es necesaria
  }

  onDelete(alumnoId: number): void {
    // El componente hijo emite el id; aquí filtramos el array de alumnos
    this.alumnosList = this.alumnosList.filter(a => a.id !== alumnoId);
  }
}
