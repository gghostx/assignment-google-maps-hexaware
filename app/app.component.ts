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
  zoom: number = 16;
  public loaders = { stops: true, trackingPoints: true };
 public index: number= 1;
zm: boolean;
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
    this.index = 1;
    this.interval = setInterval(() => {
      this.busTracking();
    }, 2000);
  }
  busTracking() {
    if (this.index == this.busTrackingPoints.length) {
      clearInterval(this.interval);
      this.index = 1;
    } else {
      this.busPosition = this.busTrackingPoints[this.index];
      this.index++;
    }
  }
  stopSimulation(){
    clearInterval(this.interval);
    this.index = 1;
    this.busPosition = this.busTrackingPoints[0];
  }
  recenter(){  
    //will add functionality to recenter to bring map center to bus agnain and reset the zoom level
    if(this.zm){
              this.zm = false
              this.zoom = 15;
              
            }
            else{
              this.zm = true
              this.zoom = 16;
            }
  }
  
}
