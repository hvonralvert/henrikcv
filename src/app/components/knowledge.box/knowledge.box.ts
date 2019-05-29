import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { state, style, trigger, transition, animate } from '@angular/animations'

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { KnowledgeService } from '@henrik/services/knowledge.service';
import { IKnowLedgeType, IKnowCatType } from '~/app/interfaces/app.interfaces';
import { IKnowledge } from '~/app/interfaces/document.interfaces';

@Component({
  selector: 'app-knowledge-box',
  templateUrl: './knowledge.box.html',
  styleUrls: ['./knowledge.box.scss'],
  providers: [KnowledgeService],
  animations: [
    trigger('showstate', [
      state('hide', style({
        opacity: 0,
        transform: 'translateX(-130px)'
      })),
      state('show', style({
        opacity: 1
      })),
      transition('hide => show', [
        animate('0.5s ease')
      ])
    ])
  ]
})
export class KnowledgeBox implements OnInit, OnDestroy {

  @Input() Catogery: IKnowCatType;
  @Input() Header: string;
  @Input() Odd = true;

  KnowLedges: IKnowledge[] = [];

  animateNextTime = 150;


  ngUnsubscribe$: Subject<void> = new Subject();

  constructor(public knowServ: KnowledgeService) {
    this.knowServ.Know$$.pipe(takeUntil(this.ngUnsubscribe$)).subscribe(knowledges => {
      this.KnowLedges = knowledges;
      this.newTImer();
    });
  }


  newTImer() {
    setTimeout(() => {

      let last = true;
      for (const knowledge of this.KnowLedges) {
        if (knowledge.state === 'hide') {
          knowledge.state = 'show';
          last = false;
          break;
        }
      }

      if (!last) {
        this.newTImer();
      }

    }, this.animateNextTime);
  }


  ngOnInit() {
    this.knowServ.initFirestore(this.Catogery);
  }


  ngOnDestroy() {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.unsubscribe();
  }

}
