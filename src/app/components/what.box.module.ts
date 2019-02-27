import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';

import { WhatBox } from '@henrik/components/what.box/what.box';

const routes: Routes = [
  {
    path: 'WhatBox',
    component: WhatBox
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule
  ],
  declarations: [
    WhatBox
  ],
  exports: [
    WhatBox
  ]
})

export class WhatBoxModule { }
