import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModifyContentComponent } from '../modify-content/modify-content.component';

@Component({
  selector: 'app-add-content-dialog',
  templateUrl: './add-content-dialog.component.html',
  styleUrls: ['./add-content-dialog.component.scss']
})
export class AddContentDialogComponent {
  dialogTitle = "Add IPLTeamsTypes"; 
  
  constructor(
    public dialogRef: MatDialogRef<ModifyContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){}

  onCancelClick(): void {
    this.dialogRef.close();
  }
  
  onAddClick(): void {
    this.dialogRef.close(this.data);
  }
}
