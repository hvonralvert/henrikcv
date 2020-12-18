import { Component, OnInit, Input } from '@angular/core';
import { IWhatBox } from '~/app/interfaces/app.interfaces';


@Component({
  selector: 'app-what-box',
  templateUrl: './what.box.html',
  styleUrls: ['./what.box.scss']
})
export class WhatBox implements OnInit {

  @Input() BoxData: IWhatBox;

  constructor() {  }

  ngOnInit() { }

}
