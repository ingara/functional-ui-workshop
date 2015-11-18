import * as ActionTypes from '../actions';

const initialState = {
  text: '',
  validationError: null
};

export default function(state = initialState, action) {
  switch (action.type) {
  case ActionTypes.FORM_CHANGE:
    return Object.assign({}, state, {
      text: action.data.text
    });
  case ActionTypes.FORM_VALIDATION:
    return Object.assign({}, state, {
      validationError: action.validationError
    });
  case ActionTypes.FORM_INVALID_SUBMIT:
    return state;
  case ActionTypes.FORM_SUBMITTED:
    return initialState;
  default:
    return state;
  }
}
