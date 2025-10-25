import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Clases } from './clases';
import { ClasesList } from './clases-list/clases-list';
import { ClasesForm } from './clases-form/clases-form';

const routes: Routes = [
  {
    path: '',
    component: Clases,
    children: [
      {
        path: '',
        component: ClasesList
      },
      {
        path: 'create',
        component: ClasesForm
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClasesRoutingModule { }
