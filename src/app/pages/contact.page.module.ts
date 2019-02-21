import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';

import { ContactPage } from '@henrik/pages/contact/contact.page';
import { InfoBoxModule } from '@henrik/components/info.box.module';


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
    InfoBoxModule,
    MatIconModule
  ],
  declarations: [ContactPage],
  exports: [ContactPage]
})

export class ContactPageModule { }
