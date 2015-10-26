import merge from 'lodash/object/merge';
import * as ActionTypes from '../actions';

const defaultState = {
  count: 0
};

export default function(state = defaultState, action) {
  switch (action.type) {
  case ActionTypes.COUNTER_FETCH:
  case ActionTypes.COUNTER_CHANGED:
    return merge({}, state, { count: action.count });
  default:
    return state;
  }
}
