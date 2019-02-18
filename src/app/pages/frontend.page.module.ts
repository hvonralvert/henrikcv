import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FrontEndPage } from '@henrik/pages/frontend/frontend.page';


const routes: Routes = [
  {
    path: '',
    component: FrontEndPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [FrontEndPage],
  exports: [FrontEndPage]
})

export class FrontEndPageModule { }
