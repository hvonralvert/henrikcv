import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';

import { InfoBox } from '@henrik/components/info.box/info.box';

const routes: Routes = [
  {
    path: 'InfoBox',
    component: InfoBox
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule
  ],
  declarations: [
    InfoBox
  ],
  exports: [
    InfoBox
  ]
})

export class InfoBoxModule { }
