import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Login } from './login/login';
import { S } from '@angular/cdk/keycodes';
import { SharedModule } from '../../shared/shared-module';



@NgModule({
  declarations: [
    Login
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AuthModule { }
