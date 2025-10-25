import { Validators } from '@angular/forms';

export const formGroup = {
  id: [''],
  nombre: ['', [Validators.required, Validators.minLength(3)]],
  descripcion: ['', [Validators.required, Validators.minLength(3)]],
  fechaInicio: ['', [Validators.required]],
  fechaFin: ['', [Validators.required]],
  estado: ['Activo', [Validators.required]],
};