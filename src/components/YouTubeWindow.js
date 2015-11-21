import React, { PropTypes } from 'react';

function YouTubeWindow({ youtubeUri }) {
  const url = `https://www.youtube.com/embed/${youtubeUri}`;
  return <iframe width="350" height="250" src={ url } frameBorder="0" allowFullscreen></iframe>;
}

YouTubeWindow.propTypes = {
  youtubeUri: PropTypes.string.isRequired
};

export default YouTubeWindow;
