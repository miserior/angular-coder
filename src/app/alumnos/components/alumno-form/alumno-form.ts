import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alumno } from '../../interface/Alumno';
import { AlumnoService } from '../../../services/alumno';

@Component({
  selector: 'app-alumno-form',
  standalone: false,
  templateUrl: './alumno-form.html',
  styleUrl: './alumno-form.css',
})
export class AlumnoForm {
  public alumnoForm: FormGroup;
  isEditMode: boolean = false;

  constructor(private fb: FormBuilder, private alumnoService: AlumnoService) {
    this.alumnoForm = this.fb.group({
      id: [''],
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      edad: ['', [Validators.required, Validators.min(1), Validators.max(120)]],
    });

    this.alumnoService.alumnoToEdit$.subscribe((alumno) => {
      if (alumno) {
        this.alumnoForm.patchValue({
          id: alumno.id,
          nombre: alumno.nombre,
          apellido: alumno.apellido,
          edad: alumno.edad,
        });
        this.isEditMode = true;
      } else {
        this.alumnoForm.reset();
        this.isEditMode = false;
      }
    });
  }

  ngOnChanges() {}

  onSubmit(): void {
    if (this.alumnoForm.invalid) {
      console.log('Formulario inválido');
      return;
    }
    if (this.isEditMode) {
      this.alumnoService.updateAlumno(this.alumnoForm.value.id, this.alumnoForm.value);
    } else {
      this.alumnoService.addAlumno(this.alumnoForm.value);
    }

    this.alumnoForm.reset();
    this.isEditMode = false;
  }

  get isNombreInvalid() {
    return this.alumnoForm.controls['nombre'].dirty && this.alumnoForm.controls['nombre'].invalid;
  }
  get isApellidoInvalid() {
    return (
      this.alumnoForm.controls['apellido'].dirty && this.alumnoForm.controls['apellido'].invalid
    );
  }
}
