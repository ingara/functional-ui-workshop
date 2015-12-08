import { AppActions } from '../actions';

const defaultState = [
  { day: 9, content: 'Faggruppeavslutning!', type: 'text', opened: false },
  { day: 10, content: 'https://i.imgur.com/QAyXWuC.gif', type: 'image', opened: false },
  { day: 11, content: 'Bekk Julebord', type: 'text', opened: false },
  { day: 12, content: '8f3RkpTnS7I', type: 'youtube', opened: false },
  { day: 13, content: '2jlMpvYvjr0', type: 'youtube', opened: false },
  { day: 14, content: 'http://www.tu.no/incoming/2013/12/17/1200023726.jpg/alternates/h1080/1200023726.jpg', type: 'image', opened: false },
  { day: 15, content: 'iMblk3L8nOQ', type: 'youtube', opened: false },
  { day: 16, content: 'spotify:track:2FRnf9qhLbvw8fu4IBXx78', type: 'spotify', opened: false },
  { day: 17, content: 'I dag skal du ut og kose deg med faggruppa', opened: false },
  { day: 18, content: 'spotify:track:7KT0MWuO7tQAdhqDXVjaHG', type: 'spotify', opened: false },
  { day: 19, content: 'Bare fem dager til jul!!', type: 'text', opened: false },
  { day: 20, content: 'http://matblogg.trinesmatblogg.netdna-cdn.com/wp-content/uploads/2013/12/IMG_2843.jpg', type: 'image', opened: false },
  { day: 21, content: 'J1Z8SQ1OUa0', type: 'youtube', opened: false },
  { day: 22, content: 'spotify:track:5YhmqI7XxMTqagUIsCTO95', type: 'spotify', opened: false }
];

export default function(state = defaultState, action = {}) {
  switch (action.type) {
  case AppActions.WINDOW_CREATE:
    return [
      ...state,
      action.window
    ];
  case AppActions.WINDOW_CLOSE_ALL:
    return state.map(w =>
        Object.assign({}, w, { opened: false }));
  case AppActions.WINDOW_OPEN_ALL:
    return state.map(w =>
        Object.assign({}, w, { opened: true }));
  default:
    return state;
  }
}
