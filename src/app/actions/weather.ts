import { WEATHER } from '../reducers/weather';

export function weatherAction(weatherData: Object) {
  return { type: WEATHER, payload: weatherData };
}