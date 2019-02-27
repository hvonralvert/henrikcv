import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { IParamInfoBox, IWhatBox } from '~/app/interfaces/app.interfaces';


@Component({
  selector: 'app-what-box',
  templateUrl: './what.box.html',
  styleUrls: ['./what.box.scss']
})
export class WhatBox implements OnInit, OnDestroy {

  @Input() BoxData: IWhatBox;


  constructor() {  }


  ngOnInit() {
  }


  ngOnDestroy() {
  }

}
