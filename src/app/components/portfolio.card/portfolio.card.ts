import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { IPortfolio } from '~/app/interfaces/app.interfaces';

import { DemoModal } from '@henrik/modals/demo.modal/demo.modal';
import { MakModal } from '@henrik/modals/mak.modal/mak.modal';
import { MatDialog } from '@angular/material';

import { GoogleAnalyticsService } from '@henrik/services/googleanalytics.service';

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio.card.html',
  styleUrls: ['./portfolio.card.scss']
})
export class PortfolioCard implements OnInit, OnDestroy {

  @Input() Portfolio: IPortfolio;


  constructor(
    public dialog: MatDialog,
    public gaServ: GoogleAnalyticsService
  ) { }


  ngOnInit() {
  }


  gotToPort() {
    if (!this.Portfolio.DemoType) {
      this.sendAnalyticsGotTo();
      return window.open(this.Portfolio.Link);
    } else if (this.Portfolio.DemoType === 'groupcaller') {
      this.openGroupCaller()
    } else {
      this.openMakalosa();
    }
  }


  openMakalosa() {
    this.sendAnalyticsOpen();

    const makModal = this.dialog.open(MakModal, {
      width: '700px',
      maxWidth: '90%',
    });
  }


  openGroupCaller() {

    this.sendAnalyticsOpen();

    const logModal = this.dialog.open(DemoModal, {
      width: '310px',
      data: this.Portfolio.DemoModalData
    });

    logModal.afterClosed().subscribe(useGoTo => {
      if (useGoTo) {
        this.sendAnalyticsGotTo();
      }
    });
  }


  sendAnalyticsOpen() {
    this.gaServ.openPortfModal(this.Portfolio.Header);
  }


  sendAnalyticsGotTo() {
    this.gaServ.goToUrlPort(this.Portfolio.Header);
  }


  getClass(): string {
    return this.Portfolio.cssClass;
  }


  ngOnDestroy() {
  }

}
