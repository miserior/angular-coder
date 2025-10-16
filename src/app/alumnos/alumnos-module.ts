import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Alumnos } from './alumnos';
import { AlumnosList } from './components/alumnos-list/alumnos-list';
import { AlumnoForm } from './components/alumno-form/alumno-form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../shared/shared-module';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    Alumnos,
    AlumnosList,
    AlumnoForm
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [
    Alumnos
  ]
})
export class AlumnosModule { }
