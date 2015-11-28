import React, { PropTypes } from 'react';

function SpotifyWindow({ spotifyUri }) {
  const url = `https://embed.spotify.com/?uri=${spotifyUri}`;
  return <iframe src={ url } className="iframe-spotify" frameBorder="0" allowTransparency="true"></iframe>;
}

SpotifyWindow.propTypes = {
  spotifyUri: PropTypes.string.isRequired
};

export default SpotifyWindow;
