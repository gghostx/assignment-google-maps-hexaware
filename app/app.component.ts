import { DataMouseEvent } from '@agm/core/map-types';
import { Component } from '@angular/core';

import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  busPosition = {};
  stops = [];
  busTrackingPoints = [];
  interval: number;
  public loaders = { stops: true, trackingPoints: true };
index: number;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getStops().then((res) => {
      this.stops = res;
      this.loaders.stops = false;
    });
    this.dataService.getTrackingPoints().then((res) => {
      this.busTrackingPoints = res;
      this.busPosition = res[0];
      this.loaders.trackingPoints = false;
    });
  }

  startTracking() {
    console.log('gggg')
    this.index = 0;
       this.interval = setInterval(() => {
        this.busTracking(); 
      }, 2000);
       }
  busTracking() {
    console.log('111')
    if(this.index == this.busTrackingPoints.length-1){
      clearInterval(this.interval);
  
    }
    else{
   this.busPosition = this.busTrackingPoints[this.index];
   this.index++;
   console.log(this.index)
    }
  }
  
}
