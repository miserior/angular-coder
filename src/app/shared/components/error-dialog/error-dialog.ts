import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  title: string;
  message: string;
}

@Component({
  selector: 'app-error-dialog',
  standalone: false,
  templateUrl: './error-dialog.html',
  styleUrl: './error-dialog.css'
})

export class ErrorDialog {
constructor(
    public dialogRef: MatDialogRef<ErrorDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  /**
   * Método opcional para cerrar el diálogo.
   * Aunque se puede usar el método de cierre directamente en el HTML, 
   * a veces es útil tener una función en el TS.
   */
  onClose(): void {
    this.dialogRef.close();
  }
}
