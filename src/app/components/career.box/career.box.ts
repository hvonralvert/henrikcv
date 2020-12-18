import { Component, OnInit } from '@angular/core';
import { ICareer } from '~/app/interfaces/app.interfaces';

import { CareerData } from '@henrik/data/career.data';

@Component({
  selector: 'app-career-box',
  templateUrl: './career.box.html',
  styleUrls: ['./career.box.scss']
})
export class CareerBox implements OnInit {

  CareerData: ICareer[] = CareerData;

  constructor() { }

  ngOnInit() { }

}
