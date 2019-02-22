import { Component, OnInit, OnDestroy } from '@angular/core';
import { IPortfolio, ICareer } from '~/app/interfaces/app.interfaces';

import { CareerData } from '@henrik/data/career.data';

@Component({
  selector: 'app-career-box',
  templateUrl: './career.box.html',
  styleUrls: ['./career.box.scss']
})
export class CareerBox implements OnInit, OnDestroy {


  CareerData: ICareer[] = CareerData;


  constructor() { }


  ngOnInit() {
  }


  ngOnDestroy() {
  }

}
