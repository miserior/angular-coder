import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { IAlumno } from './model/alumno';
import { mockAlumnos } from './data/mock';

@Injectable({
  providedIn: 'root',
})
export class AlumnoService {
  private alumnosList: IAlumno[] = mockAlumnos;
  private alumnosSubject = new BehaviorSubject<IAlumno[]>([]);
  alumnos$ = this.alumnosSubject.asObservable();
  alumnoEdit = new BehaviorSubject<IAlumno | null>(null);
  alumnoToEdit$ = this.alumnoEdit.asObservable();

  constructor() {
    this.alumnosSubject.next(this.alumnosList);
  }

  getAlumnos() {
    this.alumnosSubject.next([...this.alumnosList]); // next envia información a los suscriptores
  }

  getAlumnoById(id: number) {
    return of(this.alumnosList.find((alumno) => alumno.id === id));
  }

  addAlumno(alumno: IAlumno): void {
    const nuevo: IAlumno = {
      ...alumno,
      id: this.alumnosList.length + 1,
    };
    this.alumnosList.push(nuevo);
    this.alumnosSubject.next([...this.alumnosList]);
  }

  updateAlumno(alumno: IAlumno): void {
    const updatedCourses = this.alumnosList.map((c) => (c.id === alumno.id ? alumno : c));
    this.alumnosSubject.next(updatedCourses);
    this.alumnosList = updatedCourses;
  }

  setUpdateAlumno(id: number): void {
    this.alumnoEdit.next(this.alumnosList.find((a) => a.id === id) || null);
  }

  deleteAlumno(id: number): void {
    this.alumnosList = this.alumnosList.filter((a) => a.id !== id);
    this.alumnosSubject.next([...this.alumnosList]);
  }
}
