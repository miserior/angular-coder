import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { formGroup } from './validators';
import { CursosService } from '../../../../core/services/cursos/cursos';

@Component({
  selector: 'app-cursos-form',
  standalone: false,
  templateUrl: './cursos-form.html',
  styleUrl: './cursos-form.css',
})
export class CursosForm {
  createForm: FormGroup;
  courseId: number | null = null;
  isEditing: boolean = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private cursosService: CursosService,
    private router: Router
  ) {
    this.createForm = this.fb.group(formGroup);

    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.courseId = Number(params['id']);
        this.isEditing = true;
        this.cursosService.getCursoById(this.courseId).subscribe((course) => {
          if (course) {
            this.createForm.patchValue(course);
          }
        });
      }
    });
  }
  onSubmit(): void {
    if (this.isEditing) {
      this.cursosService.updateCurso(this.createForm.value);
    } else {
      this.cursosService.addCurso(this.createForm.value);
    }
    this.createForm.reset();

    this.router.navigate(['dashboard', 'cursos']);
  }

  inputValid(inputName: 'nombre' | 'descripcion' | 'fechaInicio' | 'fechaFin') {
    return this.createForm.get(inputName)?.valid && this.createForm.get(inputName)?.touched;
  }

  inputInvalid(inputName: 'nombre' | 'descripcion' | 'fechaInicio' | 'fechaFin') {
    return (
      this.createForm.get(inputName)?.invalid &&
      this.createForm.get(inputName)?.touched &&
      this.createForm.get(inputName)?.dirty
    );
  }

  getError(inputName: 'nombre' | 'descripcion' | 'fechaInicio' | 'fechaFin') {
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
