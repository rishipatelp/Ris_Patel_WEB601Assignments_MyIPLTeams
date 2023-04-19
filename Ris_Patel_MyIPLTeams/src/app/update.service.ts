import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { interval } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private swUpdate: SwUpdate, private snackBar: MatSnackBar) {
    if (swUpdate.isEnabled) {
      swUpdate.available.subscribe(() => {
        const snack = this.snackBar.open('Update Available', 'Reload', {
          duration: 6000,
        });

        snack.onAction().subscribe(() => {
          swUpdate.activateUpdate().then(() => document.location.reload());
        });
      });
      // Implement long polling
      interval(30 * 60 * 1000).pipe(
        mergeMap(() => swUpdate.checkForUpdate())
      ).subscribe();
    }
  }
}
