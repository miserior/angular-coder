import { Component, OnInit} from '@angular/core';
import { Alumno } from '../alumnos/interface/Alumno';
import { AlumnoService } from '../services/alumno';

@Component({
  selector: 'app-alumnos',
  standalone: false,
  templateUrl: './alumnos.html',
  styleUrl: './alumnos.css'
})
export class Alumnos implements OnInit {

  alumnosList: Alumno[] = [];
  alumnoToEdit: Alumno | null = null;
  constructor(private  alumnoService: AlumnoService) {};

  

  onAddAlumno(alumno: Alumno) {
    this.alumnoService.addAlumno(alumno);
  }

  ngOnInit(): void {
    // inicialización si es necesaria
  }

  onDelete(alumnoId: number): void {
    this.alumnoService.deleteAlumno(alumnoId);
  }

  onEdit(alumno: Alumno): void {
    this.alumnoToEdit = alumno;
  }

  onEditReceived(alumno: Alumno): void {
    this.alumnoService.updateAlumno(alumno.id, alumno);
    this.alumnoToEdit = null;
  }
}
