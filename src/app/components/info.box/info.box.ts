import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { state, trigger, transition, style, animate, animateChild, query, stagger } from '@angular/animations';

import { IParamInfoBox } from '~/app/interfaces/app.interfaces';

@Component({
  selector: 'app-info-box',
  templateUrl: './info.box.html',
  styleUrls: ['./info.box.scss'],
  animations:[
    trigger('ContentText',
    [
      transition(':enter',[
        query('@paragraphs',[
          stagger(300,[animateChild()])
        ])
      ])
    ]),
    trigger('paragraphs',
    [
      transition(':enter',[
        style({
          opacity: 0,
          transform: 'translateY(-100%)'
        }),
        animate('0.3s ease',
          style({
            opacity: 1,
            transform: 'translateY(0)'
          }))
      ])
    ]),
  ]
})
export class InfoBox implements OnInit, OnDestroy {

  @Input() InfoBox: IParamInfoBox;
  @Input() Odd = true;


  constructor() {  }


  ngOnInit() {
  }


  ngOnDestroy() {
  }

}
