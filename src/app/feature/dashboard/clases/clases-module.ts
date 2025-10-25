import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClasesRoutingModule } from './clases-routing-module';
import { Clases } from './clases';
import { SharedModule } from '../../../shared/shared-module';
import { ClasesList } from './clases-list/clases-list';
import { ClasesForm } from './clases-form/clases-form';


@NgModule({
  declarations: [
    Clases,
    ClasesList,
    ClasesForm
  ],
  imports: [
    CommonModule,
    ClasesRoutingModule,
    SharedModule
  ]
})
export class ClasesModule { }
