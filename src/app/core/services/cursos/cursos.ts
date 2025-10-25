import { Injectable } from '@angular/core';
import { ICurso } from './model/curso';
import { mockCursos } from './data/mock';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private cursosList: ICurso[] = mockCursos;
  private cursosSubject = new BehaviorSubject<ICurso[]>([]);
  cursos$ = this.cursosSubject.asObservable();
  cursoEdit = new BehaviorSubject<ICurso | null>(null);
  alumnoToEdit$ = this.cursoEdit.asObservable();

  constructor() {
    this.cursosSubject.next(this.cursosList);
  }

  getCursos() {
    this.cursosSubject.next([...this.cursosList]); // next envia información a los suscriptores
  }

  getCursoById(id: number) {
    return of(this.cursosList.find((curso) => curso.id === id));
  }

  addCurso(alumno: ICurso): void {
    const nuevo: ICurso = {
      ...alumno,
      id: this.cursosList.length + 1,
    };
    this.cursosList.push(nuevo);
    this.cursosSubject.next([...this.cursosList]);
  }

  updateCurso(curso: ICurso): void {
    const updatedCourses = this.cursosList.map((c) => (c.id === curso.id ? curso : c));
    this.cursosSubject.next(updatedCourses);
    this.cursosList = updatedCourses;
  }

  setUpdateCurso(id: number): void {
    this.cursoEdit.next(this.cursosList.find((a) => a.id === id) || null);
  }

  deleteCurso(id: number): void {
    this.cursosList = this.cursosList.filter((a) => a.id !== id);
    this.cursosSubject.next([...this.cursosList]);
  }
}
