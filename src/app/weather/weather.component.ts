import { Component, OnInit, Input } from '@angular/core';


import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  providers: [WeatherService],

})
export class WeatherComponent implements OnInit {
  @Input() term = 'London';
  weather;
  icon = () => {
    if (this.weather) {
      return `http://openweathermap.org/img/w/${this.weather.weather[0].icon}.png`;
    } else { return false; }
  }
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getWeather();
  }
  getWeather() {
    this.weatherService.getWeather(this.term)
      .subscribe((data) => {
        this.weather = data;
      });
  }

  updateTerm(term) {
    console.log(this.term);
    this.term = term;
    this.getWeather();
  }
}
