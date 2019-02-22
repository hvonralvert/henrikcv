import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { CommonService } from '~/app/services/common.service';

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

  Abouts: IAbout[] = [
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
    {
      What: 'Tidsåtgång',
      Text: '5 dagar'
    },
    {
      What: 'Github',
      Text: 'https://github.com/hvonralvert/henrikcv'
    },
  ];

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
