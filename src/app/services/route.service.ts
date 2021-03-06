import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

import { IPageLink } from '@henrik/interfaces/app.interfaces';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RouteService {

  MenuPages: IPageLink[] = [
    {
      Name: 'Front End',
      Description: 'Portfolio och kunskaper',
      Icon: 'devices_other',
      Page: 'frontend',
      Active: false
    },
    {
      Name: 'Mig',
      Description: 'Vem är jag och kontakt',
      Icon: 'face',
      Page: 'me',
      Active: false,
    },
    {
      Name: 'Kärriär',
      Description: 'Karriärshistorik',
      Icon: 'trending_up',
      Page: 'career',
      Active: false
    },
    {
      Name: 'Om OnlineCV:et',
      Description: 'Hur online cv:et är gjort.',
      Icon: 'description',
      Page: 'about',
      Active: false
    },
    {
      Name: 'Admin',
      Description: 'Administrationspanel',
      Icon: 'settings',
      Page: 'admin',
      Active: false
    }
  ];

  MenuPages$$: BehaviorSubject<IPageLink[]> = new BehaviorSubject(this.MenuPages);

  constructor(public router: Router) {
    // this.GoToPage('frontend');
  }

  GoToPage(page: string) {
    console.log(' route.service :: GoToPage :: page => '+page);
    this.MenuPages = this.MenuPages.map(el => {
      el.Active = el.Page === page ? true : false;
      return el;
    });

    this.MenuPages$$.next(this.MenuPages);
    this.router.navigateByUrl(page);
  }
}
