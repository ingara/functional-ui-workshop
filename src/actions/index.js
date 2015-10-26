import request from 'superagent';

export const COUNTER_FETCH = 'COUNTER_FETCH';
export const COUNTER_CHANGED = 'COUNTER_CHANGED';

export function fetchCounter() {
  return dispatch => {
    request
      .get('/api/counter')
      .end((err, res) => {
        if (err) {
          console.error(err);
        } else {
          dispatch({
            type: COUNTER_FETCH,
            count: res.body.count
          });
        }
      });
  };
}

function putCount(count, dispatch) {
  request
    .put('/api/counter')
    .send({ count: count })
    .end((err, res) => {
      if (err) {
        console.error(err);
      } else {
        dispatch({
          type: COUNTER_CHANGED,
          count: res.body.count
        });
      }
    });
}

export function increaseCounter() {
  return (dispatch, getState) => {
    const newCount = getState().count + 1;
    putCount(newCount, dispatch);
  };
}

export function decreaseCounter() {
  return (dispatch, getState) => {
    const newCount = getState().count - 1;
    putCount(newCount, dispatch);
  };
}
