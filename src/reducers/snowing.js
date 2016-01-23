import { AppActions } from '../actions';

const defaultState = {
  active: false
};

export default function(state = defaultState, action) {
  switch (action.type) {
  case AppActions.TOGGLE_SNOW:
    return Object.assign({}, state, { active: !state.active });
  default:
    return state;
  }
}
