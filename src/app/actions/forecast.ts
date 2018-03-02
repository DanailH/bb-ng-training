import { FORECAST } from '../reducers/forecast';

export function forecastAction(forecastData: Object) {
  return { type: FORECAST, payload: forecastData };
}