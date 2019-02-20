import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { KnowledgeBoxModule } from '@henrik/components/knowledge.box.module';
import { InfoBoxModule } from '@henrik/components/info.box.module';
import { PortfolioBoxModule } from '@henrik/components/portfolio.box.module';

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
    KnowledgeBoxModule,
    InfoBoxModule,
    PortfolioBoxModule
  ],
  declarations: [FrontEndPage],
  exports: [FrontEndPage]
})

export class FrontEndPageModule { }
