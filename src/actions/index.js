export const TOGGLE_SNOW = 'TOGGLE_SNOW';
export const OPEN_WINDOW = 'OPEN_WINDOW';

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
