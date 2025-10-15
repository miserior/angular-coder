import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Alumnos } from './alumnos';
import { AlumnosList } from './components/alumnos-list/alumnos-list';
import { AlumnoForm } from './components/alumno-form/alumno-form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Alumnos,
    AlumnosList,
    AlumnoForm
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    Alumnos
  ]
})
export class AlumnosModule { }
