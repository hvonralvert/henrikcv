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


  Slider2Value = 50;
  Slider1Value = 50;

  /*---slider data ---*/
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;


  ngUnsubscribe$: Subject<void> = new Subject();

  constructor(public realServ: RealtimeService) { }


  ngOnInit() {
    this.realServ.Sliders$$.pipe(takeUntil(this.ngUnsubscribe$)).subscribe(sliders => {
      this.getSliderValues(sliders)
    });
  }


  getSliderValues(sliders: ISlider[]) {
    if (sliders.length < 1) {
      return;
    }

    sliders.map(slider => {
      this.Slider2Value = slider.key === 'Ffq6B4g9E8PxrgugvNHA' ? slider.Value : this.Slider2Value;
      this.Slider1Value = slider.key === 'tZf7B7TkEvyQJHl9MTvK' ? slider.Value : this.Slider1Value;
    });
  }


  ngOnDestroy() {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.unsubscribe();
  }

}
