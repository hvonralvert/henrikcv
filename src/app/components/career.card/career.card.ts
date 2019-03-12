import { Component, OnInit, OnDestroy, Input, AfterViewInit } from '@angular/core';
import { IParamInfoBox, IPortfolio, ICareer } from '~/app/interfaces/app.interfaces';
import { state, trigger, transition, style, animate, animateChild, query as q, stagger } from '@angular/animations';

export type IState = 'hide' | 'show';

export interface IStateData {
  State: IState;
  DelayBeforeNext: number; // the delay before next animation
}

export interface IAnimations {
  MiddleLine: IStateData;
  Loggo: IStateData;
  Content: IStateData;
}

const query = (s, a, o = { optional: true }) => q(s, a, o);

@Component({
  selector: 'app-career-card',
  templateUrl: './career.card.html',
  styleUrls: ['./career.card.scss'],
  animations: [
    trigger('MiddleLine', [
      state('hide',
        style({
          height: '0px'
        })),
      state('show',
        style({
          height: '100%',
        })),
      transition('hide => show', [
        animate('0.4s ease')
      ]),
      transition('show => hide', [
        animate('0.4s ease-out')
      ])
    ]),
    trigger('Content',
      [
        transition('hide => show', [
          query('@paragraphs', [
            stagger(40, [animateChild()])
          ])
        ]),
      ]),
    trigger('paragraphs', [
      state('hide',
        style({
          transform: 'translateX(-110%)'
        })
      ),
      transition('hide => show', [
        style({
          transform: 'translateX(-110%)'
        }),
        animate('0.3s ease',
          style({
            transform: 'translateX(0)'
          }))
      ])
    ]),
  ]
})
export class CareerCard implements OnInit, AfterViewInit, OnDestroy {

  @Input() career: ICareer;


  Animations: IAnimations = {
    MiddleLine: {
      State: 'hide',
      DelayBeforeNext: 40
    },
    Loggo: {
      State: 'hide',
      DelayBeforeNext: 2
    },
    Content: {
      State: 'hide',
      DelayBeforeNext: 300
    }
  };


  constructor() { }


  ngOnInit() {
  }


  ngAfterViewInit() {
    // setTimeout(() => {
    //   this.AniRest();
    // }, 700)

    this.AniRest();
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

    this.Animations.MiddleLine.State = 'hide';
  }



  ngOnDestroy() {
  }

}
