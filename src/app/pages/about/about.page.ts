import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { CommonService } from '~/app/services/common.service';
import { IWhatBox, IRealtimeBox } from '~/app/interfaces/app.interfaces';

export interface IAbout {
  What: string;
  Text: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss']
})
export class AboutPage implements OnInit, OnDestroy {



  WhatBoxData: IWhatBox = {
    Header: 'Om CV:et',
    TextArray: [
      {
        Text: ['CV:et är en WebApp som har ett skalbart upplägg kodmässigt. Det är också realtidssystem och använder sig utav Route-gaurds och Lazy loading. ']
      }
    ],
    Whats: [
      {
        What: 'Språk',
        Text: 'Typescript'
      },
      {
        What: 'Ramverk',
        Text: 'Angular 2+'
      },
      {
        What: 'Grafik',
        Text: 'SASS'
      },
      {
        What: 'Back End',
        Text: 'Firebase'
      },
    ]
  };


  RealtimeBoxData: IRealtimeBox = {
    Header: 'Test realtiden',
    TextArray: [
      { Text: ['Här kan du testa realtiden'] }
    ]
  };

  desktopScreen = true;
  ngUnsubscribe$: Subject<boolean> = new Subject();

  constructor(public comServ: CommonService) {

    this.comServ.ScreenType$$.subscribe(desktop => {
      this.desktopScreen = desktop;
    });
  }


  ngOnInit() {
  }


  ngOnDestroy() {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.unsubscribe();
  }

}
