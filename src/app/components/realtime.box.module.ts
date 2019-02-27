import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';

import { RealtimeBox } from '@henrik/components/realtime.box/realtime.box';

const routes: Routes = [
  {
    path: 'RealtimeBox',
    component: RealtimeBox
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatSliderModule
  ],
  declarations: [
    RealtimeBox
  ],
  exports: [
    RealtimeBox
  ]
})

export class RealtimeBoxModule { }
