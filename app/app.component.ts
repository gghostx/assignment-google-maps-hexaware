import { DataMouseEvent } from '@agm/core/map-types';
import { Component } from '@angular/core';


import { DataService } from './data.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
  ];
interval: number;
loaders= {stops : true,trackingPoints:true};
  constructor(private dataService :DataService ) {}
 


  ngOnInit() {
this.dataService.getStops().then((res)=>{
this.stops = res;
this.loaders.stops = false;
});
this.dataService.getTrackingPoints().then((res)=>{
 this.busTrackingPoints = res;
 this.busPosition = res[0];
 this.loaders.trackingPoints = false
  });

    
}


public startTracking(){
  let i = 0;
     this.interval = setInterval(() => {
      this.busTracking(i); 
    }, 2000);
     }
busTracking(i) {

  if(i == this.busTrackingPoints.length-1){
    clearInterval(this.interval);

  }
  else{
 this.busPosition = this.busTrackingPoints[i]
  }
}
}

  





















// just an interface for type safety.
interface point {
  lat: number;
  lng: number;
}
