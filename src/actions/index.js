export const TOGGLE_SNOW = 'TOGGLE_SNOW';
export const WINDOW_OPEN = 'WINDOW_OPEN';
export const WINDOW_CREATED = 'WINDOW_CREATED';

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
