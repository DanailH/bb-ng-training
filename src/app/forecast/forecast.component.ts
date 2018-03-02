import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-forecast',
  template: `
    <div class="row" *ngIf="forecastData | async as data">
      <div class="col-12" *ngIf="data.list">
        <div class="row" *ngFor="let forecast of data.list">
          <span class="col-4">{{ forecast.dt * 1000 | date: 'mediumDate' }}</span>
          <span class="col text-right">{{ forecast.temp.min | number: '1.0-0' }} &deg;C</span>
          <span class="col text-right">{{ forecast.temp.max | number: '1.0-0' }} &deg;C</span>
          <span class="col"><app-svg-icon [type]="forecast.weather[0].main"></app-svg-icon></span>
        </div>
      </div>
    </div>
  `,
})
export class ForecastComponent {
  private forecastData: Observable<Object>;

  constructor(private service: WeatherService, private store: Store<any>) {
    this.forecastData = this.store.select('forecastReducer');
  }
}
