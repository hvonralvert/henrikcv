import { Component, OnInit } from '@angular/core';

import { CareerData, MyCareerHistory } from '@henrik/data/career.data';
import { IParamInfoBox } from '~/app/interfaces/app.interfaces';

@Component({
  selector: 'app-career',
  templateUrl: './career.page.html',
  styleUrls: ['./career.page.scss']
})
export class CareerPage implements OnInit {

  MyCareer: IParamInfoBox = MyCareerHistory;

  constructor() { }

  ngOnInit() {
  }

}
