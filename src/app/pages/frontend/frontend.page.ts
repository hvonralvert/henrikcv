import { Component, OnInit } from '@angular/core';

import { MyFrontEndHistoryData } from '@henrik/data/frontend.page.data';
import { IParamInfoBox } from '~/app/interfaces/app.interfaces';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.page.html',
  styleUrls: ['./frontend.page.scss']
})
export class FrontEndPage implements OnInit {


  MyHistory: IParamInfoBox = MyFrontEndHistoryData;

  constructor() { }

  ngOnInit() {
  }

}
