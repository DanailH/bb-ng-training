import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { apiKey, openWeatherUrl, endPoint } from '../constants';

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

    if(typeof query === 'object') {
      Object.assign(params, { lat: query.latitude, lon: query.longitude });
    } else {
      Object.assign(params, { q: query });
    }

    return this.http.get(`${openWeatherUrl}/${endPoint}`, { params });
  }
}
