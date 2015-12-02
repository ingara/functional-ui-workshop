export const TOGGLE_SNOW = 'TOGGLE_SNOW';
export const WINDOW_OPEN = 'WINDOW_OPEN';

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
