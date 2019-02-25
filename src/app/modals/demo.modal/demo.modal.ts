import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { AuthService } from '@henrik/services/auth.service';
import { IPageLink, IDemoModalData } from '~/app/interfaces/app.interfaces';

import { MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-demo-modal',
  templateUrl: './demo.modal.html',
  styleUrls: ['./demo.modal.scss']
})
export class DemoModal {


  adminButton: IPageLink;

  constructor(
    public dialogRef: MatDialogRef<DemoModal>,
    public authServ: AuthService,
    @Inject(MAT_DIALOG_DATA) public demoData: IDemoModalData
  ) {
    console.log(this.demoData);
    this.dialogRef.addPanelClass(this.demoData.PanelClass);
  }

  GoTo() {
    window.open(this.demoData.url);
    this.dialogRef.close(true);
  }

  CloseModal(): void {
    this.dialogRef.close();
  }

}
