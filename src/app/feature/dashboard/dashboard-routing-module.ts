import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';

const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'alumnos',
    loadChildren: () => import('./alumnos/alumnos-module').then(m => m.AlumnosModule)
  },
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos-module').then(m => m.CursosModule)
  },
  {
    path: 'clases',
    loadChildren: () => import('./clases/clases-module').then(m => m.ClasesModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
