import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { IParamInfoBox, IRealtimeBox, ISlider } from '~/app/interfaces/app.interfaces';

import { RealtimeService } from '@henrik/services/realtime.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-realtime-box',
  templateUrl: './realtime.box.html',
  styleUrls: ['./realtime.box.scss'],
  providers: [RealtimeService]
})
export class RealtimeBox implements OnInit, OnDestroy {

  @Input() BoxData: IRealtimeBox;


  Slider1: ISlider;
  Slider2: ISlider;

  /*---slider data ---*/
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  vertical = false;


  ngUnsubscribe$: Subject<void> = new Subject();

  constructor(public realServ: RealtimeService) { }


  ngOnInit() {
    this.realServ.Sliders$$.pipe(takeUntil(this.ngUnsubscribe$)).subscribe(sliders => {
      this.getSliderValues(sliders);
    });
  }


  getSliderValues(sliders: ISlider[]) {
    if (sliders.length < 1) {
      return;
    }

    sliders.map(slider => {
      if (slider.Number === '1') { this.Slider1 = slider; }
      if (slider.Number === '2') { this.Slider2 = slider; }
    });
  }


  sliderStopped(event, slider: ISlider) {
    const newSlider: ISlider = JSON.parse(JSON.stringify(slider));
    this.realServ.saveNewValue(newSlider);
  }


  ngOnDestroy() {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.unsubscribe();
  }

}
