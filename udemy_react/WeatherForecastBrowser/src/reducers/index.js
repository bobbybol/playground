/* jshint -W104 */
/* jshint -W119 */

import { combineReducers } from 'redux';

import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
