import { Component, OnInit, OnDestroy } from '@angular/core';

import { CareerData, MyCareerHistory } from '@henrik/data/career.data';
import { IParamInfoBox } from '~/app/interfaces/app.interfaces';
import { Subject } from 'rxjs';
import { CommonService } from '~/app/services/common.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.page.html',
  styleUrls: ['./career.page.scss']
})
export class CareerPage implements OnInit, OnDestroy {

  MyCareer: IParamInfoBox = MyCareerHistory;

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
