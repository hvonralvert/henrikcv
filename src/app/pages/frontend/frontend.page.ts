import { Component, OnInit, OnDestroy } from '@angular/core';

import { MyFrontEndHistoryData } from '@henrik/data/frontend.page.data';
import { CommonService } from '@henrik/services/common.service';

import { IParamInfoBox } from '~/app/interfaces/app.interfaces';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.page.html',
  styleUrls: ['./frontend.page.scss']
})
export class FrontEndPage implements OnInit, OnDestroy {


  MyHistory: IParamInfoBox = MyFrontEndHistoryData;

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
