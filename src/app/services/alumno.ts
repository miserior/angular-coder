import { Injectable } from '@angular/core';
import { Alumno } from '../alumnos/interface/Alumno';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private alumnosSubject = new BehaviorSubject<Alumno[]>([]);
  alumnos$ = this.alumnosSubject.asObservable(); // $ indica que es un observable
  alumnoEdit = new BehaviorSubject<Alumno | null>(null);
  alumnoToEdit$ = this.alumnoEdit.asObservable();

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
  
    getAlumnos() {
      this.alumnosSubject.next([...this.alumnosList]); // next envia información a los suscriptores
    }

    addAlumno(alumno: Alumno): void {
      const nuevo: Alumno = {
        ...alumno,
        id: this.alumnosList.length + 1
      };
      this.alumnosList.push(nuevo);
      this.alumnosSubject.next([...this.alumnosList]);
    }

    updateAlumno(id: number, alumno: Alumno): void {
      let index = this.alumnosList.findIndex(a => a.id === id);
      if (index === -1) {
        return undefined;
      }
      this.alumnosList[index] = {...alumno, id};
      this.alumnosSubject.next([...this.alumnosList]);
    }

    setUpdateAlumno(id: number): void {
      this.alumnoEdit.next(this.alumnosList.find(a => a.id === id) || null);
    }

    deleteAlumno(id: number): void {
      this.alumnosList = this.alumnosList.filter(a => a.id !== id);
      this.alumnosSubject.next([...this.alumnosList]);
    }
  
}
