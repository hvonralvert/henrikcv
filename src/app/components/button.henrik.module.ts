import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonHenrik } from '@henrik/components/button.henrik/button.henrik';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [ButtonHenrik],
  exports: [ButtonHenrik]
})

export class ButtonHenrikModule { }
