import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { MatDrawer } from '@angular/material/sidenav';

import { RouteService } from '@henrik/services/route.service';
import { IPageLink } from '@henrik/interfaces/app.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements AfterViewInit {

  @ViewChild('drawer') drawer: MatDrawer;

  MenuPages: IPageLink[] = [];

  menuWide = true;


  constructor(
    public routServ: RouteService,
  ) {

    /*There is no stop to subscription. This is intenonally since we are at app.component.ts*/
    this.routServ.MenuPages$$.subscribe(pages => {
      this.MenuPages = pages;
      console.log(this.MenuPages)
    });
  }


  ngAfterViewInit() {
    setTimeout(() => {
      this.drawer.open();
    }, 1000);
  }

  expandMenu() {
    this.menuWide = !this.menuWide;
  }


  GoToPage(page: string) {
    this.routServ.GoToPage(page);
  }

}
