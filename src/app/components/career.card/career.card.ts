import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { IParamInfoBox, IPortfolio, ICareer } from '~/app/interfaces/app.interfaces';


@Component({
  selector: 'app-career-card',
  templateUrl: './career.card.html',
  styleUrls: ['./career.card.scss']
})
export class CareerCard implements OnInit, OnDestroy {

  @Input() career: ICareer;


  constructor() { }


  ngOnInit() {
  }


  ngOnDestroy() {
  }

}
