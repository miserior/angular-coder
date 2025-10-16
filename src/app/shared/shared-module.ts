import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './pipes/capitalize/capitalize-pipe';
import { Lettersize } from './directives/lettersize/lettersize';



@NgModule({
  declarations: [
    CapitalizePipe,
    Lettersize
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CapitalizePipe,
    Lettersize
  ]
})
export class SharedModule { }
