import { Component, OnInit, OnDestroy } from '@angular/core';

import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

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

  constructor(
    public comServ: CommonService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,) {

    this.comServ.ScreenType$$.subscribe(desktop => {
      this.desktopScreen = desktop;
    });

    this.matIconRegistry.addSvgIcon(
      'skype',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/skype.svg')
    );
  }


  ngOnInit() {
  }


  ngOnDestroy() {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.unsubscribe();
  }

}
