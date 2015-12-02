import { AppActions } from '../actions';

const defaultState = [
  { day: 1, content: '123', type: 'text', opened: false },
  { day: 2, content: 'https://i.imgur.com/QAyXWuC.gif', type: 'image', opened: false },
  { day: 3, content: 'Bare 21 dager igjen til jul', opened: false },
  { day: 4, content: 'ei0+ae', opened: false },
  { day: 5, content: 'J1Z8SQ1OUa0', type: 'youtube', opened: false },
  { day: 6, content: 'http://www.tu.no/incoming/2013/12/17/1200023726.jpg/alternates/h1080/1200023726.jpg', type: 'image', opened: false },
  { day: 7, content: 'spotify:track:2TpxZ7JUBn3uw46aR7qd6V', type: 'spotify', opened: false },
  { day: 8, content: 'spotify:track:2FRnf9qhLbvw8fu4IBXx78', type: 'spotify', opened: false },
  { day: 9, content: 'I dag skal du ut og kose deg med faggruppa', opened: false },
  { day: 10, content: 'spotify:track:7KT0MWuO7tQAdhqDXVjaHG', type: 'spotify', opened: false },
  { day: 13, content: 'Nam nam lussekatter!', type: 'text', opened: false },
  { day: 14, content: 'http://matblogg.trinesmatblogg.netdna-cdn.com/wp-content/uploads/2013/12/IMG_2843.jpg', type: 'image', opened: false },
];

export default function(state = defaultState, action = {}) {
  switch (action.type) {
  case AppActions.WINDOW_CREATE:
    return [
      ...state,
      action.window
    ];
  default:
    return state;
  }
}
