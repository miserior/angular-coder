import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { IAlumno } from './model/alumno';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../utils/constants';

@Injectable({
  providedIn: 'root',
})
export class AlumnoService {
  private alumnosList: IAlumno[] = [];
  private alumnosSubject = new BehaviorSubject<IAlumno[]>([]);
  alumnos$ = this.alumnosSubject.asObservable();
  alumnoEdit = new BehaviorSubject<IAlumno | null>(null);
  alumnoToEdit$ = this.alumnoEdit.asObservable();
  private alumnosUrl = API_URL + '/alumnos';

  constructor(private http: HttpClient) {
    this.getAlumnos();
  }

  getAlumnos() {
    this.http.get<IAlumno[]>(this.alumnosUrl).subscribe((alumnos) => {
      this.alumnosList = alumnos; // Actualizar la lista local
      this.alumnosSubject.next(alumnos);
    });
  }

  getAlumnoById(id: number) {
    return this.http.get<IAlumno>(`${this.alumnosUrl}/${id}`);
  }

  addAlumno(alumno: IAlumno): void {
    const nuevo: IAlumno = {
      ...alumno,
      id: String(Number(this.alumnosList.length) + 1),
    };
    this.http.post<IAlumno>(this.alumnosUrl, nuevo).subscribe((nuevo) => {
    this.alumnosList.push(nuevo);
    this.alumnosSubject.next([...this.alumnosList]);
    });
  }

  updateAlumno(alumno: IAlumno): void {
    const updatedAlumno = this.alumnosList.map((c) => (c.id === alumno.id ? alumno : c));
    this.http.put<IAlumno>(`${this.alumnosUrl}/${alumno.id}`, alumno).subscribe((alumno) => {
    this.alumnosList = updatedAlumno;
    this.alumnosSubject.next(updatedAlumno);
    });
  }

  setUpdateAlumno(id: number): void {
    this.alumnoEdit.next(this.alumnosList.find((a) => a.id === id) || null);
  }

  deleteAlumno(id: number): void {
    const updatedAlumnos = this.alumnosList.filter((a) => a.id !== id);
    this.http.delete<IAlumno>(`${this.alumnosUrl}/${id}`).subscribe(() => {
      this.alumnosList = updatedAlumnos;
    this.alumnosSubject.next(updatedAlumnos);
    });
  }
}
