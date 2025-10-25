import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing-module';
import { Cursos } from './cursos';
import { SharedModule } from '../../../shared/shared-module';
import { CursosList } from './cursos-list/cursos-list';
import { CursosForm } from './cursos-form/cursos-form';


@NgModule({
  declarations: [
    Cursos,
    CursosList,
    CursosForm
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule
  ]
})
export class CursosModule { }
