import * as ActionTypes from '../actions';
import _ from 'lodash';

const defaultState = {
  windows: [
    { day: 1, content: '123', type: 'text', opened: false },
    { day: 2, content: 'tasfa', opened: false },
    { day: 3, content: 'wegaae', opened: false },
    { day: 4, content: 'ei0+ae', opened: false },
    { day: 5, content: 'e90ea', opened: false },
    { day: 6, content: 'qwg09jas', opened: false },
  ]
};

export default function(state = defaultState, action) {
  switch (action.type) {
  case ActionTypes.OPEN_WINDOW:
    const newWindows = _.map(state.windows, w => {
      if (action.day === w.day) {
        return Object.assign({}, w, { opened: true });
      }
      return w;
    });
    return Object.assign({}, state, { windows: newWindows });
  default:
    return state;
  }
}
