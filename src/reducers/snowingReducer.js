import { TOGGLE_SNOW } from '../actions';

const defaultState = {
  snowing: false
};

export default function(state = defaultState, action) {
  switch (action.type) {
  case TOGGLE_SNOW:
    return Object.assign({}, state, { snowing: !state.snowing });
  default:
    return state;
  }
}
