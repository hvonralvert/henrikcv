import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from '@henrik/pages/admin/admin.page';

import { ButtonHenrikModule } from '@henrik/components/button.henrik.module';


const routes: Routes = [
  {
    path: '',
    component: AdminPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ButtonHenrikModule
  ],
  declarations: [AdminPage],
  exports: [AdminPage]
})

export class AdminPageModule { }
