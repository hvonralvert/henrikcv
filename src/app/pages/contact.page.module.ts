import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ContactPage } from '@henrik/pages/contact/contact.page';


const routes: Routes = [
  {
    path: '',
    component: ContactPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ContactPage],
  exports: [ContactPage]
})

export class ContactPageModule { }
