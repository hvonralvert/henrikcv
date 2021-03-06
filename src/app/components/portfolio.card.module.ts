import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PortfolioCard } from '@henrik/components/portfolio.card/portfolio.card';

import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';


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
    MatDialogModule,
    MatIconModule
  ],
  declarations: [
    PortfolioCard
  ],
  exports: [
    PortfolioCard
  ]
})

export class PortfolioCardModule { }
