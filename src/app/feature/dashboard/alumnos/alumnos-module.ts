import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing-module';
import { Alumnos } from './alumnos';
import { SharedModule } from '../../../shared/shared-module';
import { AlumnosList } from './alumnos-list/alumnos-list';
import { AlumnosForm } from './alumnos-form/alumnos-form';


@NgModule({
  declarations: [
    Alumnos,
    AlumnosList,
    AlumnosForm
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    SharedModule
  ],
})
export class AlumnosModule { }
