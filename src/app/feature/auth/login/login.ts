import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ErrorDialog } from '../../../shared/components/error-dialog/error-dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  private openErrorDialog(title: string, message: string): void {
    this.dialog.open(ErrorDialog, {
      width: '400px',
      // Pasamos el título y el mensaje al componente ErrorDialog
      data: { title: title, message: message },
    });
  }

  OnLogin() {
    if (!this.loginForm.valid) {
      this.openErrorDialog(
        'Error de Autenticación',
        'Por favor, completa correctamente el email y la contraseña.'
      );
      return;
    }
    try {
      this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
    } catch (error) {
      this.openErrorDialog(
        'Error de Autenticación',
        'Credenciales inválidas. Verifica tu email y contraseña.'
      );
    }
  }
}
