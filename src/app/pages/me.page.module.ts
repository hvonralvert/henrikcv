import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MePage } from '@henrik/pages/me/me.page';


const routes: Routes = [
  {
    path: '',
    component: MePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [MePage],
  exports: [MePage]
})

export class MePageModule { }
