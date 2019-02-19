import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { IParamInfoBox } from '~/app/interfaces/app.interfaces';


@Component({
  selector: 'app-info-box',
  templateUrl: './info.box.html',
  styleUrls: ['./info.box.scss']
})
export class InfoBox implements OnInit, OnDestroy {

  @Input() InfoBox: IParamInfoBox;


  constructor() {  }


  ngOnInit() {
  }


  ngOnDestroy() {
  }

}
