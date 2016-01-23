import superagent from 'superagent';

export const WINDOWS_FETCH_REQUEST = 'WINDOWS_FETCH_REQUEST';
export const WINDOWS_FETCH_SUCCESS = 'WINDOWS_FETCH_SUCCESS';
export const WINDOWS_FETCH_FAILURE = 'WINDOWS_FETCH_FAILURE';
export const WINDOW_CREATE_REQUEST = 'WINDOW_CREATE_REQUEST';
export const WINDOW_CREATE_SUCCESS = 'WINDOW_CREATE_SUCCESS';
export const WINDOW_CREATE_FAILURE = 'WINDOW_CREATE_FAILURE';

const apiUrl = '/api/windows';

export function fetchWindows() {
  return dispatch => {
    dispatch({ type: WINDOWS_FETCH_REQUEST, });

    superagent
      .get(apiUrl)
      .end((err, res) => {
        if (err) {
          dispatch({
            type: WINDOWS_FETCH_FAILURE,
            err
          });
        } else {
          dispatch({
            type: WINDOWS_FETCH_SUCCESS,
            windows: res.body
          });
        }
      });
  };
}

export function createWindow(window) {
  return dispatch => {
    dispatch({ type: WINDOW_CREATE_REQUEST });

    superagent
      .post(apiUrl)
      .send(window)
      .end((err) => {
        if (err) {
          dispatch({
            type: WINDOW_CREATE_FAILURE,
            error: err
          });
        } else {
          dispatch({
            type: WINDOW_CREATE_SUCCESS,
            window
          });
        }
      });
  };
}
