import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.henrik.html',
  styleUrls: ['./button.henrik.scss']
})
export class ButtonHenrik implements OnInit {

  @Input() size = 'medium';
  @Input() iconLeft = true;
  @Input() icon;
  @Input() type = 'normal';
  @Input() text: string;
  @Input() disabled: false;
  @Input() active: boolean;
  @Input() SVG: string;

  constructor() { }

  ngOnInit() { }

  getClass(what) {
    let cssClass = ' ';
    if (what === 'container') {
      if (this.active) {
        cssClass += this.type + '-container-button-active ';
      } else {
        cssClass += this.type + '-container-button ';
      }
      cssClass += this.size + '-size-container ';
    } else if (what === 'icon') {
      cssClass += this.size + '-size-icon ';
    } else if (what === 'text') {
      cssClass += this.size + '-size-text ';
    }

    if (this.disabled) {
      cssClass += ' ralva-button-disabled';
    }

    return cssClass;
  }

}
