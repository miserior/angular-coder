import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cursos } from './cursos';
import { CursosList } from './cursos-list/cursos-list';
import { CursosForm } from './cursos-form/cursos-form';

const routes: Routes = [
  {
    path: '',
    component: Cursos,
    children: [
      {
        path: '',
        component: CursosList,
      },
      {
        path: 'create',
        component: CursosForm,
      },
      {
        path: 'edit/:id',
        component: CursosForm,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosRoutingModule {}
