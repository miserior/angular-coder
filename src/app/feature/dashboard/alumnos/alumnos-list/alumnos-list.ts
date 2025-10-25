import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AlumnoService } from '../../../../core/services/alumnos/alumno';
import { alumnoColumns, IAlumno } from '../../../../core/services/alumnos/model/alumno';

@Component({
  selector: 'app-alumnos-list',
  standalone: false,
  templateUrl: './alumnos-list.html',
  styleUrl: './alumnos-list.css',
})
export class AlumnosList {
  displayedColumns: string[] = alumnoColumns;
  dataSource = new MatTableDataSource<IAlumno>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private alumnoService: AlumnoService) {
    this.alumnoService.alumnos$.subscribe((alumnos) => {
      this.dataSource.data = alumnos;
    });
  }

  ngOnInit() {
    this.alumnoService.getAlumnos()
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.alumnoService.getAlumnos();
  }

  deleteAlumno(id: number): void {
    this.alumnoService.deleteAlumno(id);
  }

  editAlumno(id: number): void {
    this.alumnoService.setUpdateAlumno(id);
  }
}
