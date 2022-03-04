import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';

@NgModule({
  imports:      [
    BrowserModule, FormsModule,HttpClientModule,
  
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDvBaTr3ZebYY2o2bdIJajbNYJSX1NcIwg'
    })
  ],
  providers:[DataService],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
