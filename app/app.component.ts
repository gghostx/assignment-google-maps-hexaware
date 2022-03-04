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
    console.log(this.busPosition);
  }
}
