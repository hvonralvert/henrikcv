import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { state, trigger, transition, style, animate, query, animateChild, stagger } from '@angular/animations';

import { IPortfolio } from '~/app/interfaces/app.interfaces';

import { DemoModal } from '@henrik/modals/demo.modal/demo.modal';
import { MakModal } from '@henrik/modals/mak.modal/mak.modal';
import { MatDialog } from '@angular/material/dialog';

import { GoogleAnalyticsService } from '@henrik/services/googleanalytics.service';


export type IBackStates = 'start' | 'maxwidth' | 'maxheight';
export type IState = 'hide' | 'show';

export interface IStateData {
  State: IState;
  DelayBeforeNext: number; // the delay before next animation
}

export interface IAnimations {
  HeaderText: IStateData;
  HeaderImg: IStateData;
  Content: IStateData;
  Button: IStateData;
}

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio.card.html',
  styleUrls: ['./portfolio.card.scss'],
  animations: [
    trigger('Background',
      [
        state('start',
          style({
            width: '0px',
            height: '0px',
            borderRadius: '4px'
          })),
        state('maxwidth',
          style({
            width: '100%',
            height: '1px',
          })),
        state('maxheight',
          style({
            width: '100%',
            height: '100%',
          })),
        transition('start => maxwidth', [
          animate('0.3s ease')
        ]),
        transition('maxwidth => maxheight', [
          animate('0.3s ease')
        ])
      ]),
    trigger('HeaderText',
      [
        state('hide',
          style({
            opacity: 0,
            transform: 'translateX(-100%)'
          })),
        state('show',
          style({
            opacity: 1,
            transform: 'translateX(0)'
          })),
        transition('hide => show', [
          animate('0.3s ease')
        ]),
      ]),
    trigger('HeaderImg',
      [
        state('hide',
          style({
            opacity: 0,
            transform: 'scale(0.5)'
          })),
        state('show',
          style({
            opacity: 1,
            transform: 'scale(1)'
          })),
        transition('hide => show', [
          animate('0.7s cubic-bezier(.8,-0.6,0.2,3.5)')
        ]),
      ]),
    trigger('ContentImg',
      [
        state('hide',
          style({
            opacity: 0,
            transform: 'translateX(-100%)'
          })),
        state('show',
          style({
            opacity: 1,
            transform: 'translateX(0)'
          })),
        transition('hide => show', [
          animate('0.3s ease')
        ]),
      ]),
    trigger('ContentText',
      [
        transition('hide => show', [
          query('@paragraphs', [
            stagger(300, [animateChild()])
          ])
        ]),
      ]),
    trigger('paragraphs', [
      state('hide',
        style({ opacity: 0 })
      ),
      transition('hide => show', [
        style({
          opacity: 0,
          transform: 'translateX(100%)'
        }),
        animate('0.3s ease',
          style({
            opacity: 1,
            transform: 'translateX(0)'
          }))
      ])
    ]),
    trigger('Button',
      [
        state('hide',
          style({
            height: 0,
            transformStyle: 'preserve-3d',
            transform: 'rotateX(90deg)'
          })),
        state('show',
          style({
            transform: 'rotateX(0deg)',
          })),
        transition('hide => show', [
          animate('0.5s ease')
        ]),
      ])
  ]
})
export class PortfolioCard implements OnInit, AfterViewInit {

  @Input() Portfolio: IPortfolio;

  cardState: IBackStates = 'start';

  Animations: IAnimations = {
    HeaderText: {
      State: 'hide',
      DelayBeforeNext: 2
    },
    HeaderImg: {
      State: 'hide',
      DelayBeforeNext: 2
    },
    Content: {
      State: 'hide',
      DelayBeforeNext: 2
    },
    Button: {
      State: 'hide',
      DelayBeforeNext: 0
    }
  };

  constructor(
    public dialog: MatDialog,
    public gaServ: GoogleAnalyticsService
  ) { }


  ngOnInit() { }

  ngAfterViewInit() {
    this.AniBoxMaxWidth();
  }

  AniBoxMaxWidth() {
    this.cardState = 'maxwidth';
    setTimeout(() => {
      this.AniBoxMaxHeight()
    }, 500)
  }

  AniBoxMaxHeight() {
    this.cardState = 'maxheight';
    this.AniRest()
  }

  async AniRest() {
    for (const keystate of Object.keys(this.Animations)) {
      let state = this.Animations[keystate];
      await new Promise(resolve => {
        state.State = 'show'
        setTimeout(() => {
          resolve();
        }, state.DelayBeforeNext)
      })
    }
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

  getBackgroundClass(): string {
    return this.Portfolio.cssClass;
  }

}
