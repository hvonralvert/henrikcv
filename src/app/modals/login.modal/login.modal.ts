import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { AuthService } from '@henrik/services/auth.service';
import { IPageLink } from '~/app/interfaces/app.interfaces';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login.modal.html',
  styleUrls: ['./login.modal.scss']
})
export class LoginModal {

  loginFormGroup: FormGroup;
  MinPassLength = 5;

  show = true;

  adminButton: IPageLink;

  constructor(
    public dialogRef: MatDialogRef<LoginModal>,
    public authServ: AuthService,
    public formBuild: FormBuilder
  ) {
    this.newFormControls();
  }

  newFormControls() {
    this.loginFormGroup = this.formBuild.group({
      Email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      Password: new FormControl('', [
        Validators.required,
        Validators.minLength(this.MinPassLength)
      ])
    });
  }

  LoginUser() {
    if (this.loginFormGroup.status === 'VALID') {
      this.authServ.loginUser(
        this.loginFormGroup.controls.Email.value,
        this.loginFormGroup.controls.Password.value
      ).then(() => {
        this.dialogRef.close(true);
      }, error => {
        console.error(error);
      });
    }
  }

  CloseDialog(): void {
    this.dialogRef.close();
  }

}
