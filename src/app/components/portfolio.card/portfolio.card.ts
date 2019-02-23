import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { IPortfolio } from '~/app/interfaces/app.interfaces';

import { DemoModal } from '@henrik/modals/demo.modal/demo.modal';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio.card.html',
  styleUrls: ['./portfolio.card.scss']
})
export class PortfolioCard implements OnInit, OnDestroy {

  @Input() Portfolio: IPortfolio;


  constructor(
    public dialog: MatDialog
  ) { }


  ngOnInit() {
  }


  openModal() {
    if (!this.Portfolio.DemoType) {
      return window.open(this.Portfolio.Link);
    }

    const logModal = this.dialog.open(DemoModal, {
      width: '310px',
      data: this.Portfolio.DemoModalData
    });

  }

  getClass(): string {
    return this.Portfolio.cssClass;
  }


  ngOnDestroy() {
  }

}
