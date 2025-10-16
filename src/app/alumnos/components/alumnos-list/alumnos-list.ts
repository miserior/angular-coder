import { Component, Input, ViewChild, EventEmitter,Output, OnChanges, SimpleChanges} from '@angular/core';
import { Alumno } from '../../interface/Alumno';
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
  @Output() alumnoDelete = new EventEmitter<number>();

  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'edad', 'acciones'];
  dataSource = new MatTableDataSource<Alumno>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['alumnos'] && this.dataSource) {
      // Set the new data to the MatTableDataSource.
      // This is the crucial step that refreshes the table.
      this.dataSource.data = this.alumnos;
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.data = this.alumnos;
  }

  deleteAlumno(id: number): void {
    this.alumnoDelete.emit(id);
  }
}
