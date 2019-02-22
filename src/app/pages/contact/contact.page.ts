import { Component, OnInit, OnDestroy } from '@angular/core';

import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { CommonService } from '~/app/services/common.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit, OnDestroy {

  desktopScreen = true;
  ngUnsubscribe$: Subject<boolean> = new Subject();

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    public comServ: CommonService
  ) {
    this.matIconRegistry.addSvgIcon(
      'skype',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/skype.svg')
    );

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
