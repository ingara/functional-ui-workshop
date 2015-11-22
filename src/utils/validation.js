import { parseSpotifyUrl, parseYouTubeUrl } from './urlParsers';

export function isValidText(text) {
  return text.length > 5;
}

export function isValidImageUrl(url) {
  const regs = [
    /\.(jpeg|jpg|gif|png)$/,
    /http:\/\/(.*imgur\.com\/.*)/i
  ];
  return regs.some(re => re.test(url));
}

export function isValidSpotifyUrl(url) {
  return parseSpotifyUrl(url) !== null;
}

export function isValidYouTubeUrl(url) {
  return parseYouTubeUrl(url) !== null;
}

export default {
  isValidText,
  isValidImageUrl,
  isValidSpotifyUrl,
  isValidYouTubeUrl
};
