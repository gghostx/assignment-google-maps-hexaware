import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  constructor(private httpService: HttpClient) {}

  getStops() {
    return new Promise((resolve, reject) => {
      this.httpService
        .get('https://61a4a0604c822c0017041d33.mockapi.io/shuttle/v1/stops')
        .subscribe((res: any) => {
          console.log(res)
          resolve(res.data);
        });
    });
  }
}
