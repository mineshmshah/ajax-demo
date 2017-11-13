import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';

@Injectable()
export class WeatherService {
  number = Math.random();

  constructor(private http: Http) {
  }


  handleError() {
    return Observable.of(false);
  }

  getWeather(location) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=57d36da6b8187a992393dc6a0f4c96c3`;

    // observable removed map function to make angular light so need to import it in.
    // map is a copy - creates new observable that is passed.
    return this.http.get(url)
      .map((data) => {
        return data.json();
      })
      .catch(this.handleError);
  }
}


// subscribe resolves like a promise but can be run more than once same as using toPromise.then().
// return type is a observable
// this.http.get(url)
//   .subscribe((data) => {
//   data.json();
//   debugger;
//   });
