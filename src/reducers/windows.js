import { AppActions } from '../actions';

const defaultState = [
  { day: 1, content: 'Yo!', type: 'text', opened: false },
  { day: 2, content: '2jlMpvYvjr0', type: 'youtube', opened: false },
  { day: 3, content: 'Du er flink', type: 'text', opened: false },
  { day: 4, content: 'http://tummax.com/wp-content/uploads/2015/05/wow.png', type: 'image', opened: false },
  { day: 5, content: 'http://deaddarlings.com/wp-content/uploads/2015/01/POW-Weddings.jpg', type: 'image', opened: false },
  { day: 6, content: 'J1Z8SQ1OUa0', type: 'youtube', opened: false },
  { day: 7, content: 'spotify:track:1sdjNMLfOmKh3XICWEHh62', type: 'spotify', opened: false },
  { day: 8, content: 'Redux <3', type: 'text', opened: false },
  { day: 9, content: '8f3RkpTnS7I', type: 'youtube', opened: false },
  { day: 10, content: 'iMblk3L8nOQ', type: 'youtube', opened: false },
  { day: 11, content: 'spotify:track:7KT0MWuO7tQAdhqDXVjaHG', type: 'spotify', opened: false },
  { day: 12, content: 'spotify:track:5YhmqI7XxMTqagUIsCTO95', type: 'spotify', opened: false }
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
