import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PortfolioCard } from '@henrik/components/portfolio.card/portfolio.card';

const routes: Routes = [
  {
    path: 'PortfolioCard',
    component: PortfolioCard
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    PortfolioCard
  ],
  exports: [
    PortfolioCard
  ]
})

export class PortfolioCardModule { }
