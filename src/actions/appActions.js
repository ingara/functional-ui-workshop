export const TOGGLE_SNOW = 'TOGGLE_SNOW';
export const WINDOW_OPEN = 'WINDOW_OPEN';
export const WINDOW_OPEN_ALL = 'WINDOW_OPEN_ALL';
export const WINDOW_CLOSE_ALL = 'WINDOW_CLOSE_ALL';

export function toggleSnow() {
  return {
    type: TOGGLE_SNOW
  };
}

export function openAllWindows() {
  return {
    type: WINDOW_OPEN_ALL
  };
}

export function closeAllWindows() {
  return {
    type: WINDOW_CLOSE_ALL
  };
}

export function openWindow(day) {
  return {
    type: WINDOW_OPEN,
    day
  };
}
