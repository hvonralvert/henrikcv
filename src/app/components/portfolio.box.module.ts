import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';

import { PortfolioBox } from '@henrik/components/portfolio.box/portfolio.box';
import { PortfolioCardModule  } from '@henrik/components/portfolio.card.module';

const routes: Routes = [
  {
    path: 'PortfolioBox',
    component: PortfolioBox
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    PortfolioCardModule
  ],
  declarations: [
    PortfolioBox
  ],
  exports: [
    PortfolioBox
  ]
})

export class PortfolioBoxModule { }
