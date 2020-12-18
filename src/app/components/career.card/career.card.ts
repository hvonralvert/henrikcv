import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ICareer } from '~/app/interfaces/app.interfaces';
import { state, trigger, transition, style, animate, animateChild, query, stagger } from '@angular/animations';

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

@Component({
  selector: 'app-career-card',
  templateUrl: './career.card.html',
  styleUrls: ['./career.card.scss'],
  animations: [
    trigger('MiddleLine', [
      state('hide',
        style({
          maxHeight: '0px',
        })),
      state('show',
        style({
          maxHeight: '800px',
        })),
      transition('hide => show', [
        animate('0.4s ease')
      ]),
      transition('show => hide', [
        animate('0.4s ease')
      ])
    ]),
    trigger('Loggo', [
      state('hide',
        style({
          opacity:0
        })),
      state('show',
        style({
          opacity:1
        })),
      transition('hide => show', [
        animate('0.3s ease')
      ]), 
    ])
    ,
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
export class CareerCard implements OnInit, AfterViewInit {

  @Input() career: ICareer;

  Animations: IAnimations = {
    Loggo: {
      State: 'hide',
      DelayBeforeNext: 50
    },
    MiddleLine: {
      State: 'hide',
      DelayBeforeNext: 30
    },
    Content: {
      State: 'hide',
      DelayBeforeNext: 300
    }
  };

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.AniRest();
    }, 300);
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

}
