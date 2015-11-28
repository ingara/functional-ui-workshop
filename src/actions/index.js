export const TOGGLE_SNOW = 'TOGGLE_SNOW';
export const WINDOW_OPEN = 'WINDOW_OPEN';
export const WINDOW_CREATED = 'WINDOW_CREATED';
export const WINDOWS_LOAD_REQUEST = 'WINDOWS_LOAD_REQUEST';
export const WINDOWS_LOAD_SUCCESS = 'WINDOWS_LOAD_SUCCESS';
export const WINDOWS_LOAD_FAILURE = 'WINDOWS_LOAD_FAILURE';


export function toggleSnow() {
  return {
    type: TOGGLE_SNOW
  };
}

export function openWindow(day) {
  return {
    type: WINDOW_OPEN,
    day
  };
}

export function createWindow(data) {
  //return dispatch => {
  //  dispatch({ type: WINDOW_CREATED, data });
  //
  //  superagent
  //    .post(data)
  //    .end(
  //      error => dispatch({ type: WINDOW_CREATION_ERROR, data, error: error }),
  //      resp => dispatch({}));
  //}

  return {
    type: WINDOW_CREATED,
    window: {
      day: data.day,
      type: data.type,
      content: data.text,
      opened: false
    }
  };
}

export function loadWindowsSuccess(response) {
  return {
    type: WINDOWS_LOAD_SUCCESS,
    response
  };
}

export function loadWindowsFailure(error) {
  return {
    type: WINDOWS_LOAD_FAILURE,
    error
  };
}

export function loadWindowsRequest() {
  return {
    type: WINDOWS_LOAD_REQUEST,
  };
}
