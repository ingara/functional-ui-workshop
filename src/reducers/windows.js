import { AppActions, ApiActions } from '../actions';

const defaultState = [];

export default function(state = defaultState, action) {
  switch (action.type) {
  case AppActions.WINDOW_CLOSE_ALL:
    return state.map(w =>
      Object.assign({}, w, { opened: false }));
  case AppActions.WINDOW_OPEN_ALL:
    return state.map(w =>
      Object.assign({}, w, { opened: true }));
  case AppActions.WINDOW_OPEN:
    return state.map(w =>
        action.day === w.day ?
          Object.assign({}, w, { opened: true }) :
          w
      );
  case ApiActions.WINDOW_CREATE_SUCCESS:
    return [
      ...state,
      action.window
    ];
  case ApiActions.WINDOWS_FETCH_SUCCESS:
    return action.windows;
  default:
    return state;
  }
}
