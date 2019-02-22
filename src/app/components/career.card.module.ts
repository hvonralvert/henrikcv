import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CareerCard } from '@henrik/components/career.card/career.card';

const routes: Routes = [
  {
    path: 'CareerCard',
    component: CareerCard
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    CareerCard
  ],
  exports: [
    CareerCard
  ]
})

export class CareerCardModule { }
