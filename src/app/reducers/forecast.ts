import { Action } from '@ngrx/store';

export const FORECAST = 'FORECAST';

interface ForecastAction extends Action {
  payload: Object;
}

export function forecastReducer(state: Object = {}, action: ForecastAction) {
	switch (action.type) {
		case FORECAST:
			return Object.assign(state, action.payload);
      
		default:
			return state;
	}
}