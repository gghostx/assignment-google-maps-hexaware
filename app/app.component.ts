import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { DataService } from './data.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // google maps zoom level
  zoom: number = 16;

  // initial center position for the map

  busPosition = {
    lat: 50.082730,
    lng: 14.431697
  };
  stops = [];
  busTrackingPoints = [
    {
      lat: 50.082911,
      lng: 14.431411
    },
    {
      lat: 50.083202,
      lng: 14.430994
    },
    {
      lat: 50.083352,
      lng: 14.430780
    },
    {
      lat: 50.083491,
      lng: 14.430569
    },
    {
      lat: 50.083644,
      lng: 14.430367
    }
  ]
constructor(private dataService:DataService){

}

  ngOnInit() {
this.dataService.getStops().then((res)=>{
console.log(res)
})

    // let i = 0;
    // const obs = Observable.interval(2000)
    //   .takeWhile((v) =>  i < this.tmpPoints.length)
    //   .subscribe(() => {
    //     const pos = this.tmpPoints[i];
    //     this.points.push(pos);
    //     this.currentPos = pos;
    //     i++;
    //   })
  }



















}

// just an interface for type safety.
interface point {
  lat: number;
  lng: number;
}
