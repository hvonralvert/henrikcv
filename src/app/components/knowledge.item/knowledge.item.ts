import { Component, OnInit, Input } from '@angular/core';

import { IKnowledge } from '~/app/interfaces/document.interfaces';


export interface IStars {
  Light: boolean;
}

@Component({
  selector: 'app-knowledge-item',
  templateUrl: './knowledge.item.html',
  styleUrls: ['./knowledge.item.scss']
})
export class KnowledgeItem implements OnInit {

  @Input() knowledge: IKnowledge;


  stars: IStars[] = [];

  constructor() { }

  ngOnInit() {
    console.log('in the item');
    console.log(this.knowledge);
    this.runStars();
  }

  runStars() {
    const newStars: IStars[] = [];
    for (let i = 0; i <= 4; i++) {
      newStars.push({ Light: this.knowledge.Stars <= i ? false : true });
    }

    this.stars = newStars;
  }


}
