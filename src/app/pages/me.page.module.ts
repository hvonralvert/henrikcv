import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { KnowledgeBoxModule } from '@henrik/components/knowledge.box.module';
import { InfoBoxModule } from '@henrik/components/info.box.module';

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
    KnowledgeBoxModule,
    InfoBoxModule
  ],
  declarations: [MePage],
  exports: [MePage]
})

export class MePageModule { }
