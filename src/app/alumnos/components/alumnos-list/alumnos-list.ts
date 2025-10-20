import { Component, Input, ViewChild, EventEmitter,Output, OnChanges, SimpleChanges} from '@angular/core';
import { Alumno } from '../../interface/Alumno';
import { AlumnoService} from '../../../services/alumno';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-alumnos-list',
  standalone: false,
  templateUrl: './alumnos-list.html',
  styleUrl: './alumnos-list.css'
})
export class AlumnosList {

  @Input() alumnos: Alumno[] = [];

  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'edad', 'acciones'];
  dataSource = new MatTableDataSource<Alumno>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private alumnoService: AlumnoService) { 
    this.alumnoService.alumnos$.subscribe(alumnos => {
      this.dataSource.data = alumnos;
    } );
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
