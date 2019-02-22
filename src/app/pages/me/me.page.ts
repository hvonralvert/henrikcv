import { Component, OnInit, OnDestroy } from '@angular/core';

import { MySelfData } from '@henrik/data/me.page.data';

import { CommonService } from '@henrik/services/common.service';
import { IParamInfoBox } from '~/app/interfaces/app.interfaces';

import { Subject } from 'rxjs';


@Component({
  selector: 'app-me',
  templateUrl: './me.page.html',
  styleUrls: ['./me.page.scss']
})
export class MePage implements OnInit, OnDestroy {

  desktopScreen = true;
  ngUnsubscribe$: Subject<boolean> = new Subject();

  MySelf: IParamInfoBox[] = MySelfData;

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
