import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { formGroup } from './validators';
import { AlumnoService } from '../../../../core/services/alumnos/alumno';


@Component({
  selector: 'app-alumnos-form',
  standalone: false,
  templateUrl: './alumnos-form.html',
  styleUrl: './alumnos-form.css',
})
export class AlumnosForm {
  createForm: FormGroup;
  alumnoId: number | null = null;
  isEditing: boolean = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private alumnoService: AlumnoService,
    private router: Router
  ) {
    this.createForm = this.fb.group(formGroup);

    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.alumnoId = Number(params['id']);
        this.isEditing = true;
        this.alumnoService.getAlumnoById(this.alumnoId).subscribe((alumno) => {
          if (alumno) {
            this.createForm.patchValue(alumno);
          }
        });
      }
    });
  }
  onSubmit(): void {
    if (this.isEditing) {
      this.alumnoService.updateAlumno(this.createForm.value);
    } else {
      this.alumnoService.addAlumno(this.createForm.value);
    }
    this.createForm.reset();

    this.router.navigate(['dashboard', 'alumnos']);
  }

  inputValid(inputName: 'nombre' | 'apellido' | 'edad' | 'email') {
    return this.createForm.get(inputName)?.valid && this.createForm.get(inputName)?.touched;
  }

  inputInvalid(inputName: 'nombre' | 'apellido' | 'edad' | 'email') {
    return (
      this.createForm.get(inputName)?.invalid &&
      this.createForm.get(inputName)?.touched &&
      this.createForm.get(inputName)?.dirty
    );
  }

  getError(inputName: 'nombre' | 'apellido' | 'edad' | 'email') {
    if (!this.createForm.get(inputName)?.errors) {
      return null;
    }

    const errors = Object.keys(this.createForm.get(inputName)?.errors as string[]);

    if (errors.length === 0) {
      return null;
    }

    let message = '';

    errors.forEach((error) => {
      switch (error) {
        case 'required':
          message += 'Este campo es requerido';
          break;
        case 'minlength':
          message += 'Este campo debe tener al menos 3 caracteres';
          break;

        default:
          break;
      }
    });

    return message;
  }
}
