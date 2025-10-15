import { Component, EventEmitter, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alumno } from '../../interface/Alumno';

@Component({
  selector: 'app-alumno-form',
  standalone: false,
  templateUrl: './alumno-form.html',
  styleUrl: './alumno-form.css'
})
export class AlumnoForm {
  public alumnoForm: FormGroup;
  @Output() sendAlumno = new EventEmitter<Alumno>();

  constructor(private fb: FormBuilder) { 
    this.alumnoForm = this.fb.group({
      nombre: ['',[Validators.required, Validators.minLength(3)]],
      apellido: ['',[Validators.required, Validators.minLength(3)]],
      edad: ['', [Validators.required, Validators.min(1), Validators.max(120)]]
    });
  }
onSubmit(): void {
    if (this.alumnoForm.invalid) {
      console.log('Formulario inválido')
      return
    }
    this.sendAlumno.emit(this.alumnoForm.value);
    this.alumnoForm.reset();
  }

  get isNombreInvalid() {
    return this.alumnoForm.controls['nombre'].dirty && this.alumnoForm.controls['nombre'].invalid;
  }
    get isApellidoInvalid() {
    return this.alumnoForm.controls['apellido'].dirty && this.alumnoForm.controls['apellido'].invalid;
  }
}
