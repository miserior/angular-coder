import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Alumnos } from './alumnos';
import { AlumnosList } from './alumnos-list/alumnos-list';
import { AlumnosForm } from './alumnos-form/alumnos-form';

const routes: Routes = [
  {
    path: '',
    component: Alumnos,
        children: [
          {
            path: '',
            component: AlumnosList
          },
          {
            path: 'create',
            component: AlumnosForm
          },
          {
            path: 'edit/:id',
            component: AlumnosForm
          }
        ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
