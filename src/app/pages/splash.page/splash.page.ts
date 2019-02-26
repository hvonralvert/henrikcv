import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { CommonService } from '@henrik/services/common.service';

import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-splash-page',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss']
})
export class SplashPage implements OnInit, OnDestroy {

  desktopScreen = true;
  userClicked = false;

  @Output() userEntered = new EventEmitter<string>();

  splashData = {
    Name: 'Henrik Ralvert',
    Description: 'Front End, WebApp, IOT'
  };

  ngUnsubscribe$: Subject<boolean> = new Subject();


  constructor(
    public comServ: CommonService
  ) { }


  ngOnInit() {
    this.comServ.ScreenType$$.pipe(takeUntil(this.ngUnsubscribe$)).subscribe(desktop => {
      this.desktopScreen = desktop;
    });
  }

  userEnter() {
    this.userClicked = true;
    this.userEntered.emit('sweden');
  }


  ngOnDestroy() {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.unsubscribe();
  }

}
