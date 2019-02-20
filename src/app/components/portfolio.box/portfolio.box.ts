import { Component, OnInit, OnDestroy } from '@angular/core';
import { IPortfolio } from '~/app/interfaces/app.interfaces';

import { PortfolioData } from '@henrik/data/portfolio.data';

@Component({
  selector: 'app-portfolio-box',
  templateUrl: './portfolio.box.html',
  styleUrls: ['./portfolio.box.scss']
})
export class PortfolioBox implements OnInit, OnDestroy {


  Portfilios: IPortfolio[] = PortfolioData;


  constructor() { }


  ngOnInit() {
  }


  ngOnDestroy() {
  }

}
