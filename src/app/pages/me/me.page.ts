import { Component, OnInit } from '@angular/core';

import { MySelfData } from '@henrik/data/me.page.data';
import { IParamInfoBox } from '~/app/interfaces/app.interfaces';


@Component({
  selector: 'app-me',
  templateUrl: './me.page.html',
  styleUrls: ['./me.page.scss']
})
export class MePage implements OnInit {

  MySelf: IParamInfoBox[] = MySelfData;

  constructor() {
  }

  ngOnInit() {
  }

}
