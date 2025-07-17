import { ErrorHandler, Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class CustomErrorHandlerService implements ErrorHandler {
  private snackbar = inject(MatSnackBar);
  private translate = inject(TranslateService);

  public handleError(error: unknown): void {
    this.snackbar.open(this.translate.instant('error.unexpected-exception'), 'danger');
    throw error;
  }
}
