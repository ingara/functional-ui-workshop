export const TOGGLE_SNOW = 'TOGGLE_SNOW';
export const WINDOW_OPEN = 'WINDOW_OPEN';
export const WINDOW_CREATE = 'WINDOW_CREATE';

export function toggleSnow() {
  return {
    type: TOGGLE_SNOW
  };
}

export function createWindow(window) {
  return {
    type: WINDOW_CREATE,
    window
  };
}
