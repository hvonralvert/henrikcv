import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import {CareerPage} from '@henrik/pages/career/career.page';


const routes: Routes = [
  {
    path: '',
    component: CareerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [CareerPage],
  exports: [CareerPage]
})

export class CareerPageModule { }
