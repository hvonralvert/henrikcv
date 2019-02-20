import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { IParamInfoBox } from '~/app/interfaces/app.interfaces';


@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio.card.html',
  styleUrls: ['./portfolio.card.scss']
})
export class PortfolioCard implements OnInit, OnDestroy {

  @Input() InfoBox: IParamInfoBox;


  constructor() {  }


  ngOnInit() {
  }


  ngOnDestroy() {
  }

}
