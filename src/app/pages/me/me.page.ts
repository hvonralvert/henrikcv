import { Component, OnInit, OnDestroy } from '@angular/core';
import { state, trigger, transition, style, animate, animateChild, query, stagger } from '@angular/animations';

import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { MySelfData } from '@henrik/data/me.page.data';

import { CommonService } from '@henrik/services/common.service';
import { IParamInfoBox } from '~/app/interfaces/app.interfaces';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-me',
  templateUrl: './me.page.html',
  styleUrls: ['./me.page.scss'],
  animations:[
    trigger('ContentText',
    [
      transition(':enter',[
        query('@paragraphs',[
          stagger(300,[animateChild()])
        ])
      ])
    ]),
    trigger('paragraphs',
    [
      transition(':enter',[
        style({
          opacity: 0,
          transform: 'translateY(-100%)'
        }),
        animate('0.3s ease',
          style({
            opacity: 1,
            transform: 'translateY(0)'
          }))
      ])
    ]),
  ]
})
export class MePage implements OnInit, OnDestroy {

  desktopScreen = true;
  ngUnsubscribe$: Subject<boolean> = new Subject();

  MySelf: IParamInfoBox[] = MySelfData;

  constructor(
    public comServ: CommonService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,) {

    this.comServ.ScreenType$$.pipe(takeUntil(this.ngUnsubscribe$)).subscribe(desktop => {
      this.desktopScreen = desktop;
    });

    this.matIconRegistry.addSvgIcon(
      'skype',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/skype.svg')
    );
  }

  ngOnInit() { }

  ngOnDestroy() {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.unsubscribe();
  }

}
