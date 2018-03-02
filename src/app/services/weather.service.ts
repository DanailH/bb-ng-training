import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { forkJoin } from "rxjs/observable/forkJoin";

import { apiKey, openWeatherUrl, weatherEndPoint, forecastEndPoint } from '../constants';

interface Coordinates {
  latitude: number;
  longitude: number;
}

@Injectable()
export class WeatherService {
  constructor(private http: HttpClient) {}

  loadWeatherData(query: string|Coordinates): Observable<Object> {
    const params = {
      appid: apiKey,
      units: 'metric',
    };

    if (typeof query === 'object') {
      Object.assign(params, { lat: query.latitude, lon: query.longitude });
    } else {
      Object.assign(params, { q: query });
    }

    const weather = this.http.get(`${openWeatherUrl}/${weatherEndPoint}`, { params });
    const forecast = this.http.get(`${openWeatherUrl}/${forecastEndPoint}`, { params });

    return forkJoin([weather, forecast]).pipe(
      map(data => ({
        weather: data[0],
        forecast: data[1],
      }))
    );
  }
}
