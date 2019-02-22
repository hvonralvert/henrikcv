import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CareerPage} from '@henrik/pages/career/career.page';
import { KnowledgeBoxModule } from '@henrik/components/knowledge.box.module';
import { InfoBoxModule } from '@henrik/components/info.box.module';
import { CareerBoxModule } from '@henrik/components/career.box.module';

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
    KnowledgeBoxModule,
    InfoBoxModule,
    CareerBoxModule
  ],
  declarations: [CareerPage],
  exports: [CareerPage]
})

export class CareerPageModule { }
