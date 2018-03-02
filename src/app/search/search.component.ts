import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { debounceTime, map, mergeAll, tap, catchError } from 'rxjs/operators';
import 'rxjs/add/observable/merge';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';

import { WeatherService } from '../services/weather.service';
import { weatherAction } from '../actions/weather';
import { forecastAction } from '../actions/forecast';

@Component({
  selector: 'app-search',
  template: `
    <input [formControl]="search" type="text" class="form-control" />
  `,
})
export class SearchComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private search = new FormControl();

  constructor(private service: WeatherService, private store: Store<any>) {}

  filterForecast(forecast: { list: Array<Object> }): Object {
    return {
      ...forecast,
      list: forecast.list.slice(1, 6),
    };
  }

  ngOnInit(): void {
    const locationDataSource = new Subject();
    const locationData = locationDataSource.asObservable();
    
    let locationObservable: Observable<Object>;
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        location => locationDataSource.next(location.coords)
      );
    }

    let observable = Observable.merge(
        locationData,
        this.search.valueChanges.pipe(
          debounceTime(500),
          tap(() => locationDataSource.complete())
        )
      ).pipe(
        map(query => this.service.loadWeatherData(query)),
        mergeAll(),
        catchError(err => observable)
      );

    this.subscription = observable.subscribe(
      weatherData => {
        this.store.dispatch(weatherAction(weatherData.weather));
        this.store.dispatch(forecastAction(this.filterForecast(weatherData.forecast)));
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
