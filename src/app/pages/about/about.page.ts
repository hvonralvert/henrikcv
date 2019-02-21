import { Component, OnInit } from '@angular/core';

export interface IAbout {
  What: string;
  Text: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss']
})
export class AboutPage implements OnInit {

  Abouts: IAbout[] = [
    {
      What: 'Språk',
      Text: 'Typescript'
    },
    {
      What: 'Ramverk',
      Text: 'Angular 2+'
    },
    {
      What: 'Grafik',
      Text: 'SASS'
    },
    {
      What: 'Back End',
      Text: 'Firebase'
    },
    {
      What: 'Tidsåtgång',
      Text: '5 dagar'
    },
    {
      What: 'Github',
      Text: 'https://github.com/hvonralvert/henrikcv'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
