export function parseSpotifyUrl(url) {
  const regs = [
    /https:\/\/open.spotify.com\/(track|album|artist)\/([a-zA-Z0-9]{22})$/,
    /spotify:(track|album|artist):([a-zA-Z0-9]{22})$/
  ];

  for (let i = 0; i < regs.length; i++) {
    const match = url.match(regs[i]);
    if (match !== null) {
      const [ , , uri ] = match;
      return uri;
    }
  }

  return null;
}

export function parseYouTubeUrl(url) {
  const reg = /https:\/\/www.youtube.com\/watch\?v=([a-zA-Z0-9]{11})/;
  const match = url.match(reg);

  if (match !== null) {
    const [ , uri ] = match;
    return uri;
  }

  return null;
}
