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
      Name: 'Mig',
      Description: 'Vision, mål och personlighet',
      Icon: 'contact',
      Page: 'me',
      Active: false,
    },
    {
      Name: 'Om OnlineCV:et',
      Description: 'Hur online cv:et är gjort och sök.',
      Icon: 'home',
      Page: 'home',
      Active: false
    },
    {
      Name: 'Front End',
      Description: 'Portfolio och kunskaper',
      Icon: 'settings',
      Page: 'frontend',
      Active: false
    },
    {
      Name: 'Kärriär',
      Description: 'Karriärshistorik',
      Icon: 'settings',
      Page: 'career',
      Active: false
    },
    {
      Name: 'Kontakt',
      Description: 'Karriärshistorik',
      Icon: 'settings',
      Page: 'contact',
      Active: false
    }
  ];

  MenuPages$$: BehaviorSubject<IPageLink[]> = new BehaviorSubject(this.MenuPages);


  constructor(public router: Router) {
    this.GoToPage('home');
  }


  GoToPage(page: string) {
    this.MenuPages = this.MenuPages.map(el => {
      el.Active = el.Page === page ? true : false;
      return el;
    });
    
    this.MenuPages$$.next(this.MenuPages);
    this.router.navigateByUrl(page);
  }
}
