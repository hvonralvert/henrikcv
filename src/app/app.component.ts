import { Component, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';

import { MatDialog } from '@angular/material';
import { MatDrawer } from '@angular/material/sidenav';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

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
  adminOnline = false;

  constructor(
    public routServ: RouteService,
    public dialog: MatDialog,
    public authServ: AuthService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {

    /*There is no stop to subscription. This is intenonally since we are at app.component.ts*/
    this.routServ.MenuPages$$.subscribe(pages => {
      this.MenuPages = pages;
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
  }


  ngAfterViewInit() {
    setTimeout(() => {
      this.drawer.open();
    }, 1000);
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


  GoToPage(page: string) {
    this.routServ.GoToPage(page);
  }

}
