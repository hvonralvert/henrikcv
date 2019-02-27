import { Injectable, OnDestroy } from '@angular/core';

import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

import { Subject, Observable, BehaviorSubject, of } from 'rxjs';
import { takeUntil, map, catchError } from 'rxjs/operators';
import { ISlider } from '../interfaces/app.interfaces';

@Injectable()

export class RealtimeService implements OnDestroy {

    SildersColl: AngularFirestoreCollection<ISlider>;
    Sliders$: Observable<ISlider[]>;
    Sliders$$: BehaviorSubject<ISlider[]>;

    ngUnsubscribe$: Subject<void> = new Subject();


    constructor(public afs: AngularFirestore) {
        this.Sliders$$ = new BehaviorSubject([]);
    }


    initSliders() {
        this.SildersColl = this.afs.collection('Sliders');

        this.Sliders$ = this.SildersColl.snapshotChanges().pipe(
            map(action => {
                return action.map(a => {
                    const data = a.payload.doc.data() as ISlider;
                    return { ...data };
                });
            }),
            takeUntil(this.ngUnsubscribe$),
            catchError(error => {
                console.error('ERROR: gettings sliders' + error);
                return of([]);
            })
        );

        this.Sliders$.pipe(takeUntil(this.ngUnsubscribe$)).subscribe(sliders => {
            this.Sliders$$.next(sliders);
        });
    }


    saveNewValue(slider: ISlider) {
        this.SildersColl.doc(slider.key).update(slider);
    }


    ngOnDestroy() {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.unsubscribe();
    }

}
