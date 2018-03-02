import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  template: `
    <div class="row" *ngIf="weatherData | async as data">
      <div class="col-12 text-center">
        {{ data.name }}
      </div>
      <div *ngIf="data.main" class="col-12 text-center">
        {{ data.main.temp | number: '1.0-0' }} &deg;C
      </div>
      <div *ngIf="data.weather" class="col-12 text-center">
        {{ data.weather[0].main }}, W: {{ data.wind.speed }} m/s
      </div>
    </div>
  `,
})
export class WeatherComponent {
  private weatherData: Observable<Object>;

  constructor(private service: WeatherService, private store: Store<any>) {
    this.weatherData = this.store.select('weatherReducer');
  }
}
