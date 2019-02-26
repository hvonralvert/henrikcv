import { Component, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';

import { MatDialog } from '@angular/material';
import { MatDrawer } from '@angular/material/sidenav';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonService } from '@henrik/services/common.service';

import { RouteService } from '@henrik/services/route.service';
import { AuthService } from '@henrik/services/auth.service';

import { IPageLink } from '@henrik/interfaces/app.interfaces';

import { LoginModal } from '@henrik/modals/login.modal/login.modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [MatDialog]
})

export class AppComponent implements AfterViewInit {

  @ViewChild('drawer') drawer: MatDrawer;


  MenuPages: IPageLink[] = [];

  menuWide = true;
  menuMode: MatDrawer['mode'] = 'side';
  adminOnline = false;
  desktopScreen = false;

  toolbarHeader = '';

  UserEntered = false;

  constructor(
    public routServ: RouteService,
    public dialog: MatDialog,
    public authServ: AuthService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    public comServ: CommonService
  ) {

    /*There is no stop to subscription. This is intenonally since we are at app.component.ts*/
    this.routServ.MenuPages$$.subscribe(pages => {
      this.MenuPages = pages;
      this.toolbarHeader = this.getToolbarHeader();
    });

    this.authServ.UserOnline$$.subscribe(online => {
      this.adminOnline = online;
    });

    this.matIconRegistry.addSvgIcon(
      'github',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/github.svg')
    );

    this.matIconRegistry.addSvgIcon(
      'linkedin',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/linkedin.svg')
    );

    this.comServ.ScreenType$$.subscribe(desktop => {
      this.tooggleMenue(desktop);
    });
  }


  getToolbarHeader(): string {
    for (const page of this.MenuPages) {
      if (page.Active) {
        return page.Name;
      }
    }
  }


  tooggleMenue(desktop: boolean) {
    this.desktopScreen = desktop;

    this.menuMode = this.desktopScreen ? 'side' : 'over';

    if (!this.drawer) {
      return;
    }

    if (this.desktopScreen) {
      this.drawer.open();
    } else {
      this.drawer.close();
    }
  }


  ngAfterViewInit() {
    // setTimeout(() => {
    //   if (this.desktopScreen) {
    //     this.drawer.open();
    //   }
    // }, 1000);

    // setTimeout(() => {
    //   this.UserEntered = true;
    //   setTimeout(() => {
    //     if (this.desktopScreen) {
    //       this.drawer.open();
    //     }
    //   }, 1000);
    // }, 5000);
  }


  openLoginModal(): void {
    const logModal = this.dialog.open(LoginModal, {
      width: '250px',
    });

    logModal.afterClosed().subscribe(result => {
      if (result) {
        this.GoToPage('admin');
      }
    });
  }


  LogOut() {
    this.authServ.logoutUser();
  }


  expandMenu() {
    this.menuWide = !this.menuWide;
  }

  enterSwed() {
    this.UserEntered = true;
    this.GoToPage('frontend');

    setTimeout(() => {
      if (this.desktopScreen) {
        this.drawer.open();
      }
    }, 1000);
  }

  GoToPage(page: string) {
    this.routServ.GoToPage(page);
    if (this.drawer && !this.desktopScreen) {
      this.drawer.close();
    }
  }

  /*-------- fonrt call backs ----*/
  showMenuButton(page: IPageLink): boolean {
    return (page.Page !== 'admin') || ((page.Page === 'admin') && this.adminOnline);
  }

}
