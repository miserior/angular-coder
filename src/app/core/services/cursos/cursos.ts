import { Injectable } from '@angular/core';
import { ICurso } from './model/curso';
import { BehaviorSubject, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../utils/constants';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private cursosList: ICurso[] = [];
  private cursosSubject = new BehaviorSubject<ICurso[]>([]);
  cursos$ = this.cursosSubject.asObservable();
  cursoEdit = new BehaviorSubject<ICurso | null>(null);
  cursoToEdit$ = this.cursoEdit.asObservable();
  private cursosUrl = API_URL + '/cursos';

  constructor(private http: HttpClient) {
    this.getCursos();
  }

  getCursos() {
    this.http.get<ICurso[]>(this.cursosUrl).subscribe((cursos) => {
      this.cursosList = cursos; // Actualizar la lista local
      this.cursosSubject.next(cursos);
    });
  }

  getCursoById(id: number) {
    return this.http.get<ICurso>(`${this.cursosUrl}/${id}`);
  }

  addCurso(curso: ICurso): void {
    const nuevo: ICurso = {
      ...curso,
      id: String(Number(this.cursosList.length) + 1),
    };
    this.http.post<ICurso>(this.cursosUrl, nuevo).subscribe((nuevo) => {
      this.cursosList.push(nuevo);
      this.cursosSubject.next([...this.cursosList]);
    });
  }

  updateCurso(curso: ICurso): void {
    const updatedCourses = this.cursosList.map((c) => (c.id === curso.id ? curso : c));
    this.http.put<ICurso>(`${this.cursosUrl}/${curso.id}`, curso).subscribe((curso) => {
      this.cursosList = updatedCourses;
      this.cursosSubject.next(updatedCourses);
    });
  }

  setUpdateCurso(id: number): void {
    this.cursoEdit.next(this.cursosList.find((a) => a.id === id) || null);
  }

  deleteCurso(id: number): void {
    const updatedCourses = this.cursosList.filter((a) => a.id !== id);
    this.http.delete<ICurso>(`${this.cursosUrl}/${id}`).subscribe(() => {
      this.cursosList = updatedCourses;
      this.cursosSubject.next(updatedCourses);
    });
  }
}
