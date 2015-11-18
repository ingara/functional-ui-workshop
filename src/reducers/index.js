import { combineReducers } from 'redux';
import snowing from './snowing';
import calendar from './calendar';
import form from './form';

export default combineReducers({
  snowing, calendar, form
});
