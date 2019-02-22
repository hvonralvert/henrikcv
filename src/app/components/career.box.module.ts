import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CareerBox } from '@henrik/components/career.box/career.box';
import { CareerCardModule } from '@henrik/components/career.card.module';

const routes: Routes = [
  {
    path: 'CareerBox',
    component: CareerBox
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CareerCardModule
  ],
  declarations: [
    CareerBox
  ],
  exports: [
    CareerBox
  ]
})

export class CareerBoxModule { }
