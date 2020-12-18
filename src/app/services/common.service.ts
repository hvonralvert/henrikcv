import { Injectable } from '@angular/core';

import { Observable, fromEvent, BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

export type IScreenType = 'desktop' | 'phone';

export interface IScreen {
  Width: number;
  Height: number;
}
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  ScreenSize$: Observable<any>;

  whenDesktopWidth = 600;

  ScreenType$$: BehaviorSubject<boolean>;

  constructor() {
    this.startScreenSizes();
  }

  startScreenSizes() {
    this.ScreenType$$ = new BehaviorSubject<boolean>(this.startScreenDesktop());

    this.ScreenSize$ = fromEvent(window, 'resize').pipe(
      debounceTime(100)
    );

    this.ScreenSize$.subscribe(event => {
      const newScreen: IScreen = {
        Width: event.target.innerWidth ? event.target.innerWidth : 0,
        Height: event.target.innerHeight ? event.target.innerHeight : 0
      };

      this.newScreenDesktop(newScreen);
    });
  }

  newScreenDesktop(newScreen: IScreen) {
    this.ScreenType$$.next(newScreen.Width < this.whenDesktopWidth ? false : true);
  }

  startScreenDesktop(): boolean {
    const newScreen: IScreen = {
      Width: window.innerWidth ? window.innerWidth : 0,
      Height: window.innerHeight ? window.innerHeight : 0
    };

    return newScreen.Width < this.whenDesktopWidth ? false : true;
  }
}
