export const SNOWING_TOGGLE = 'SNOWING_TOGGLE';
export const OPEN_WINDOW = 'OPEN_WINDOW';

export function toggleSnow() {
  return {
    type: SNOWING_TOGGLE
  };
}

export function openWindow(day) {
  return {
    type: OPEN_WINDOW,
    day
  };
}
