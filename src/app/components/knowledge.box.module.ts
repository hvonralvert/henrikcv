import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';

import { KnowledgeBox } from '@henrik/components/knowledge.box/knowledge.box';
import { KnowledgeItem } from '@henrik/components/knowledge.item/knowledge.item';

const routes: Routes = [
  {
    path: 'KnowledgeBox',
    component: KnowledgeBox
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule
  ],
  declarations: [
    KnowledgeBox,
    KnowledgeItem
  ],
  exports: [
    KnowledgeBox
  ]
})

export class KnowledgeBoxModule { }
