import { Action } from '@ngrx/store';

export const WEATHER = 'WEATHER';

interface WeatherAction extends Action {
  payload: Object;
}

export function weatherReducer(state: Object = {}, action: WeatherAction) {
	switch (action.type) {
		case WEATHER:
			return Object.assign(state, action.payload);
      
		default:
			return state;
	}
}