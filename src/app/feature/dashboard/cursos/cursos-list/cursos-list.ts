import { Component, ViewChild } from '@angular/core';
import { cursoColumns, ICurso } from '../../../../core/services/cursos/model/curso';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CursosService } from '../../../../core/services/cursos/cursos';

@Component({
  selector: 'app-cursos-list',
  standalone: false,
  templateUrl: './cursos-list.html',
  styleUrl: './cursos-list.css',
})
export class CursosList {
  displayedColumns: string[] = cursoColumns;
  dataSource = new MatTableDataSource<ICurso>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private cursosService: CursosService) {
    this.cursosService.cursos$.subscribe((courses) => {
      this.dataSource.data = courses;
    });
  }

  ngOnInit() {
    this.cursosService.getCursos();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  deleteCurso(id: number) {
    this.cursosService.deleteCurso(id);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
