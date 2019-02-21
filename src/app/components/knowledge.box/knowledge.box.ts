import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { KnowledgeService } from '@henrik/services/knowledge.service';
import { IKnowLedgeType, IKnowCatType } from '~/app/interfaces/app.interfaces';
import { IKnowledge } from '~/app/interfaces/document.interfaces';

@Component({
  selector: 'app-knowledge-box',
  templateUrl: './knowledge.box.html',
  styleUrls: ['./knowledge.box.scss'],
  providers: [KnowledgeService]
})
export class KnowledgeBox implements OnInit, OnDestroy {

  @Input() Catogery: IKnowCatType;
  @Input() Header: string;


  KnowLedges: IKnowledge[] = [];

  ngUnsubscribe$: Subject<void> = new Subject();

  constructor(public knowServ: KnowledgeService) {
    this.knowServ.Know$$.pipe(takeUntil(this.ngUnsubscribe$)).subscribe(knowledges => {
      this.KnowLedges = knowledges;
    });
  }


  ngOnInit() {
    this.knowServ.initFirestore(this.Catogery);
  }


  ngOnDestroy() {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.unsubscribe();
  }

}
