export const TOGGLE_SNOW = 'TOGGLE_SNOW';
export const OPEN_WINDOW = 'OPEN_WINDOW';
export const FORM_CHANGE = 'FORM_CHANGE';
export const FORM_VALIDATION = 'FORM_VALIDATION';
export const FORM_SUBMITTED = 'FORM_SUBMITTED';
export const FORM_INVALID_SUBMIT = 'FORM_INVALID_SUBMIT';

export function toggleSnow() {
  return {
    type: TOGGLE_SNOW
  };
}

export function openWindow(day) {
  return {
    type: OPEN_WINDOW,
    day
  };
}

function validateForm(dispatch, data) {
  dispatch({
    type: FORM_VALIDATION,
    validationError: data.text.length < 5 ? 'Tekst for kort' : null
  });
}

export function formChange(data) {
  return dispatch => {
    dispatch({
      type: FORM_CHANGE,
      data
    });

    validateForm(dispatch, data);
  };
}

export function formSubmit() {
  return (dispatch, getState) => {
    const { form } = getState();
    if (form.validationError !== null) {
      dispatch({ type: FORM_INVALID_SUBMIT });
    } else {
      dispatch({ type: FORM_SUBMITTED });
    }
  };
}
