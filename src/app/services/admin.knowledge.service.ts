import { Injectable } from '@angular/core';

import { LangKnowsData, ToolsKnowsData, SoftKnowsData } from '@henrik/data/knows.data';

import { Subject, Observable, BehaviorSubject, of } from 'rxjs';
import { takeUntil, map, catchError } from 'rxjs/operators';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { IKnowledge } from '~/app/interfaces/document.interfaces';

@Injectable()
export class AdminKnowledgeService {

  KnowColl: AngularFirestoreCollection<IKnowledge>;
  Know$: Observable<IKnowledge[]>;
  Know$$: BehaviorSubject<IKnowledge[]>;

  CurrentKnow: IKnowledge[] = [];

  ngUnsubscribe$: Subject<void> = new Subject();

  constructor(public afs: AngularFirestore) {
    this.initFirestore();
  }

  initFirestore() {
    this.KnowColl = this.afs.collection('/Knowledges/', ref => {
      let query: firebase.default.firestore.CollectionReference | firebase.default.firestore.Query = ref;
      query = query.orderBy('Order', 'asc');
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
      this.CurrentKnow = Knowledges;
    });
  }


  removeOldKnowledges() /*Remove current knowledges before pushing new ones */: Promise<any> {

    if (this.CurrentKnow.length === 0) {
      return Promise.resolve(true);
    }

    const batch = this.afs.firestore.batch();
    const CurrentKnows: IKnowledge[] = JSON.parse(JSON.stringify(this.CurrentKnow));

    for (const know of CurrentKnows) {
      const knowRef = this.KnowColl.doc(know.key).ref;
      batch.delete(knowRef);
    }

    return batch.commit();
  }


  async addNewKnows() /* main funct to add new knowledges */ {
    await this.removeOldKnowledges();
    const newLangKnows: IKnowledge[] = this.prepNewKnows(LangKnowsData);
    this.batchNewKnows(newLangKnows);

    const newToolsData: IKnowledge[] = this.prepNewKnows(ToolsKnowsData);
    this.batchNewKnows(newToolsData);

    const newSoftData: IKnowledge[] = this.prepNewKnows(SoftKnowsData);
    this.batchNewKnows(newSoftData);
  }


  prepNewKnows(knows: IKnowledge[]): IKnowledge[] {
    let Order = 1;
    for (const know of knows) {
      know.key = this.afs.createId();
      know.Order = Order;
      Order++;
    }

    return knows;
  }


  batchNewKnows(knows: IKnowledge[]) {
    const batch = this.afs.firestore.batch();

    for (const know of knows) {
      const knowRef = this.KnowColl.doc(know.key).ref;
      batch.set(knowRef, know);
    }

    return batch.commit();
  }
}
