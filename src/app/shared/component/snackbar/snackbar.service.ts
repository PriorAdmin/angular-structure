import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from './snackbar.component';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message: string, type: string) {
    const data = { message, type };
    this.snackBar.openFromComponent(SnackbarComponent, {
      data,
      panelClass: [type === 'success' ? 'snackbar-success' : 'snackbar-error'],
    });
  }
}
