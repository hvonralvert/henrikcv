import { Injectable } from '@angular/core';

import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';

import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { map, catchError, take, takeUntil } from 'rxjs/operators';
import { IKnowledge } from '../interfaces/document.interfaces';
import { IKnowLedgeType, IKnowCatType } from '../interfaces/app.interfaces';

@Injectable()
export class KnowledgeService {

  KnowColl: AngularFirestoreCollection<IKnowledge>;
  Know$: Observable<IKnowledge[]>;
  Know$$: BehaviorSubject<IKnowledge[]>;

  KnowledgeType: IKnowLedgeType;
  Catogery: IKnowCatType;

  ngUnsubscribe$: Subject<void> = new Subject();


  constructor(public afs: AngularFirestore) {
    this.Know$$ = new BehaviorSubject([]);
  }


  initFirestore(KnowledgeType: IKnowLedgeType, Catogery: IKnowCatType) {
    this.KnowledgeType = KnowledgeType;
    this.Catogery = Catogery;

    this.KnowColl = this.afs.collection('/Knowledges/', ref => {
      let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
      query = query.orderBy('Order', 'asc').where('KnowledgeType', '==', this.KnowledgeType).where('Catogery', '==', this.Catogery);
      return query;
    });

    this.Know$ = this.KnowColl.snapshotChanges().pipe(
      map(action => {
        return action.map(a => {
          const data = a.payload.doc.data() as IKnowledge;
          return { ...data };
        });
      }),
      takeUntil(this.ngUnsubscribe$),
      catchError(error => {
        console.log('################# - ERROR  query - #####################');
        console.log(error);
        return of([]);
      })
    );

    this.Know$.pipe(takeUntil(this.ngUnsubscribe$)).subscribe(Knowledges => {
      console.log('current knowledges');
      console.log(Knowledges);
      this.Know$$.next(Knowledges);
    });
  }

}
