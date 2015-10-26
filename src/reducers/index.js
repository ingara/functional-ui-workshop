import { combineReducers } from 'redux';
import snowingReducer from './snowingReducer';
import calendarReducer from './calendarReducer';

export default combineReducers({
  snowing: snowingReducer,
  calendar: calendarReducer
});
